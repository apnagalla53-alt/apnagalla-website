// Progressive enhancement: content and navigation work without this script.
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver' in window){
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.remove('reveal-pending');observer.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll<HTMLElement>('[data-reveal],.feature-card,.plan-card,.preview-header,.ask-header,.cta-container').forEach(el=>{if(el.getBoundingClientRect().top>innerHeight){el.classList.add('reveal-pending');observer.observe(el);}});
}
