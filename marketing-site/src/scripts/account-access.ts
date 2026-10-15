type GoogleApi={accounts:{id:{initialize:(options:Record<string,unknown>)=>void;renderButton:(element:HTMLElement,options:Record<string,unknown>)=>void}}};
declare global {interface Window {google?:GoogleApi}}
let sdk:Promise<void>|null=null;
function loadGoogle(){
  if(window.google)return Promise.resolve();
  if(!sdk)sdk=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://accounts.google.com/gsi/client';script.async=true;const timer=setTimeout(()=>{sdk=null;script.remove();reject(new Error('Google did not load. Check your connection and retry.'));},15000);script.onload=()=>{clearTimeout(timer);resolve();};script.onerror=()=>{clearTimeout(timer);sdk=null;script.remove();reject(new Error('Could not load Google sign-in.'));};document.head.appendChild(script);});
  return sdk;
}
export function initializeWebsiteAccount(root:HTMLElement){
  const signup=root.dataset.signup==='true',status=root.querySelector<HTMLElement>('[data-status]')!,error=root.querySelector<HTMLElement>('[data-error]')!,google=root.querySelector<HTMLElement>('[data-google]')!,retry=root.querySelector<HTMLButtonElement>('[data-google-retry]')!,terms=root.querySelector<HTMLInputElement>('[data-terms]');
  const api=(root.dataset.apiUrl||'').replace(/\/+$/,'').replace(/(?:\/api\/v1)+$/,'')+'/api/v1';
  const app=new URL(root.dataset.appUrl||'https://app.apnagalla.in');
  if(app.hostname==='localhost'&&/^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(location.hostname))app.hostname=location.hostname;
  const destination=new URL('/auth/continue',app).href;
  root.querySelector<HTMLAnchorElement>('[data-continue] a')!.href=destination;
  const device=()=>{let id=localStorage.getItem('evolix-device-id');if(!id){const bytes=crypto.getRandomValues(new Uint8Array(16));bytes[6]=(bytes[6]&15)|64;bytes[8]=(bytes[8]&63)|128;const value=Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');id=[value.slice(0,8),value.slice(8,12),value.slice(12,16),value.slice(16,20),value.slice(20)].join('-');localStorage.setItem('evolix-device-id',id);}return id;};
  const showError=(failure:unknown)=>{error.textContent=failure instanceof Error?failure.message:'Could not sign in. Please retry.';error.hidden=false;status.textContent='';};
  async function request(endpoint:string,body?:unknown){const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),70000);try{const response=await fetch(api+endpoint,{method:body===undefined?'GET':'POST',credentials:'include',headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},...(body===undefined?{}:{body:JSON.stringify(body)}),signal:controller.signal});let data:any;try{data=await response.json();}catch{throw new Error('The account server is waking up. Please retry in a moment.');}if(!response.ok){if(data.code==='GOOGLE_ACCOUNT_NOT_REGISTERED')root.querySelector<HTMLElement>('[data-create-account]')!.hidden=false;const message=Array.isArray(data.message)?data.message.join('. '):data.message||'Could not finish sign-in.';throw new Error(message);}return data;}catch(failure){if(failure instanceof DOMException&&failure.name==='AbortError')throw new Error('The account server took too long. Please retry.');throw failure;}finally{clearTimeout(timer);}}
  let busy=false,googleConfigured=false,preparation=0;
  function signedIn(){status.textContent='Signed in. Opening your shop…';root.querySelector<HTMLElement>('[data-continue]')!.hidden=false;location.assign(destination);}
  const form=root.querySelector<HTMLFormElement>('[data-password-form]');
  form?.addEventListener('submit',async event=>{event.preventDefault();if(busy)return;busy=true;error.hidden=true;const button=form.querySelector<HTMLButtonElement>('button')!;button.disabled=true;status.textContent='Signing in…';try{const values=new FormData(form);await request('/auth/login',{username:String(values.get('username')||'').trim(),password:String(values.get('password')||''),device_id:device()});signedIn();}catch(failure){showError(failure);}finally{busy=false;button.disabled=false;}});
  async function prepareGoogle(){
    const generation=++preparation;
    error.hidden=true;retry.hidden=true;
    if(!googleConfigured){status.textContent='Google sign-in is not configured yet. Existing shop owners can use their password.';return;}
    if(signup&&!terms?.checked){google.replaceChildren();status.textContent='Accept the Terms and Privacy Policy to enable Google signup.';return;}
    if(!(location.protocol==='https:'&&!/^\d+\.\d+\.\d+\.\d+$/.test(location.hostname)&&!location.hostname.includes(':')||['localhost','127.0.0.1','[::1]'].includes(location.hostname))){status.textContent='Google sign-in needs the live HTTPS website or localhost on the server PC. Use your shop password on this LAN address.';return;}
    status.textContent='Preparing Google sign-in…';
    try{const challenge=await request(signup?'/auth/google/signup-challenge':'/auth/google/challenge',{});await loadGoogle();if(!window.google||generation!==preparation)return;
      window.google.accounts.id.initialize({client_id:challenge.client_id,nonce:challenge.nonce,auto_select:false,callback:async(response:{credential?:string})=>{if(!response.credential||busy)return;if(signup&&!terms?.checked){showError(new Error('Accept the Terms and Privacy Policy first.'));return;}busy=true;error.hidden=true;status.textContent='Verifying your Google account…';try{await request(signup?'/auth/google/signup':'/auth/google/login',{challenge_id:challenge.challenge_id,credential:response.credential,device_id:device(),...(signup?{terms_accepted:true,referral_code:new URLSearchParams(location.search).get('ref')||undefined}:{})});signedIn();}catch(failure){showError(failure);retry.hidden=false;}finally{busy=false;}}});
      google.replaceChildren();window.google.accounts.id.renderButton(google,{theme:'outline',size:'large',text:signup?'signup_with':'signin_with',width:Math.min(360,Math.max(200,root.clientWidth)),shape:'rectangular'});status.textContent='';
    }catch(failure){showError(failure);retry.hidden=false;}
  }
  async function refreshCapabilities(){try{const caps=await request('/auth/capabilities');googleConfigured=!!caps.google_client_id;if(googleConfigured)void prepareGoogle();else status.textContent='Google sign-in is not configured yet. Existing shop owners can use their password.';}catch(failure){showError(failure);retry.hidden=false;}}
  retry.addEventListener('click',()=>void (googleConfigured?prepareGoogle():refreshCapabilities()));terms?.addEventListener('change',()=>void prepareGoogle());
  // Reuse the shared HttpOnly API cookie; the website stores no authentication token.
  const resume=async()=>{
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),70000);
    try{const response=await fetch(api+'/auth/session',{credentials:'include',signal:controller.signal});if(response.ok){signedIn();return true;}}catch{/* Fresh visitors can still choose a sign-in method. */}finally{clearTimeout(timer);}
    return false;
  };
  void resume().then(existing=>{if(!existing)void refreshCapabilities();});
}
