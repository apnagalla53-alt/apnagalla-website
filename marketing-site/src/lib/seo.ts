export const SITE = 'https://apnagalla.in';
export const INSTAGRAM = 'https://www.instagram.com/apnagalla.in/';
export function canonicalUrl(value: string) {
  const url = new URL(value, SITE);
  const path = url.pathname.replace(/\/+$/, '') || '/';
  return SITE + (path === '/' || /\.[a-z0-9]+$/i.test(path) ? path : path + '/');
}
export const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
export const organization = {
  '@type': 'Organization', '@id': SITE + '/#organization', name: 'Apna Galla', url: SITE + '/',
  logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 },
  description: 'Billing, digital khata, stock and daily shop hisaab software for Indian retailers.',
  sameAs: [INSTAGRAM], areaServed: { '@type': 'Country', name: 'India' },
};
export const pageSearchCopy: Record<string, { title: string; description: string }> = {
  '/about': { title: 'About Apna Galla | Built for Indian Shopkeepers', description: 'Learn why Apna Galla brings billing, stock, customer khata and daily galla into one practical workspace for Indian retail shops.' },
  '/features': { title: 'Billing, Stock, Khata & Shop Hisaab Features | Apna Galla', description: 'Explore billing, digital khata, inventory, purchases, expenses and daily galla. See which shop workflows and advanced features fit each Apna Galla plan.' },
  '/support': { title: 'Help with Billing, Khata & Shop Setup | Apna Galla', description: 'Find help with Apna Galla shop setup, billing, customer khata, stock, reports and account access. Explore the relevant workflow or contact support.' },
  '/contact': { title: 'Contact Apna Galla | Shop Software Help & Questions', description: 'Ask about Apna Galla plans, shop setup, billing, khata or migration. Find the contact and support options for your retail software questions.' },
  '/data-security': { title: 'Shop Data Security & Account Access | Apna Galla', description: 'Read how Apna Galla approaches account access, permissions and shop data protection, and understand your responsibilities when using the service.' },
  '/privacy': { title: 'Privacy Policy | Apna Galla', description: 'Read the Apna Galla privacy policy to understand how information is handled when you use the website and shop management service.' },
  '/terms': { title: 'Terms of Service | Apna Galla', description: 'Read the terms that apply to Apna Galla accounts, shop software, subscriptions and use of the service before creating an account.' },
  '/refund-policy': { title: 'Refund & Cancellation Policy | Apna Galla', description: 'Read the Apna Galla policy on refunds and cancellations, including the terms relevant to your subscription and service use.' },
  '/referral-terms': { title: 'Referral & Campaign Terms | Apna Galla', description: 'Read the conditions for Apna Galla referrals and campaign codes, including eligibility and activation terms for participating shop accounts.' },
  '/login': { title: 'Sign In to Your Shop Account | Apna Galla', description: 'Sign in to your Apna Galla account and continue to your shop billing, customer khata, stock and daily galla workspace.' },
  '/signup': { title: 'Create Your Shop Account & Get a Demo | Apna Galla', description: 'Create your Apna Galla account, set up your shop and request demo activation for billing, stock and digital khata. Activation terms apply.' },
  '/': { title: 'Billing, Khata & Dukaan Hisaab Software | Apna Galla', description: 'Manage bills, udhaar khata, stock, supplier dues and daily galla in one app for Indian shops. Dukaan ka hisaab, made simple. Create an account for a demo.' },
  '/features/billing': { title: 'Shop Billing Software: Cash, UPI & Udhaar | Apna Galla', description: 'Make item bills, Quick Bills or amount-only sales. Track Cash, UPI and udhaar separately. Start shop billing without setting up full inventory first.' },
  '/features/khata': { title: 'Digital Khata & Udhaar Hisaab for Shops | Apna Galla', description: 'Track customer udhaar, partial payments and supplier balances with a digital bahi-khata. Know kis se kitna lena hai and kisko kitna dena hai.' },
  '/features/inventory': { title: 'Shop Stock & Inventory Management Software | Apna Galla', description: 'Manage stock, purchases, opening quantities and low-stock needs. Keep unknown stock clearly marked while you set up your dukaan inventory.' },
  '/features/gst': { title: 'GST Billing & Tax Invoice Software for Shops | Apna Galla', description: 'Create GST invoices with configured tax details, CGST, SGST or IGST breakup and A4 printing. GST features are available with eligible Smart and Pro plans.' },
  '/features/reports': { title: 'Shop Sales, Stock & Hisaab Reports | Apna Galla', description: 'See daily sales, purchases, expenses, stock and dues. Eligible plans add cost-based profit reports so your shop hisaab uses recorded business data.' },
  '/features/daily-galla': { title: 'Daily Galla & Shop Cash Register Software | Apna Galla', description: 'Check aaj galle mein kitna cash hona chahiye. Reconcile opening cash, cash sales, collections and payments while keeping UPI separate.' },
  '/features/purchases': { title: 'Purchase Entry & Supplier Khata Software | Apna Galla', description: 'Record supplier purchases, cash or credit payments and stock receipts together. Create an item or supplier while entering the same purchase.' },
  '/features/expenses': { title: 'Dukaan Expense & Daily Kharch Tracking | Apna Galla', description: 'Record shop expenses by category and payment method. Keep daily kharch, supplier payments and stock purchases distinct in your business hisaab.' },
  '/features/profit': { title: 'Shop Profit, Cost & Sales Reports | Apna Galla', description: 'Understand sales, genuine item cost and expenses with eligible profit reports. Missing cost stays unknown or partial instead of becoming false zero cost.' },
  '/features/advanced-inventory': { title: 'Retail Variants, Units, Batch & Expiry Tracking | Apna Galla', description: 'Manage relevant sizes, colours, packs, batches and expiry with eligible inventory features. See plan details for advanced inventory and serial tracking.' },
  '/features/ask-apna-galla': { title: 'Ask Your Shop Hisaab: Retail AI Assistant | Apna Galla', description: 'Ask aaj ki sale, customer dues or stock questions using the text assistant. Answers use available shop records and permissions. Voice questions are coming soon.' },
  '/ask-apna-galla': { title: 'Ask Apna Galla: Shop Hisaab Questions & Answers', description: 'Ask about shop sales, khata, stock and expenses in familiar words. Explore data-based answers and see which assistant features are available in each plan.' },
  '/pricing': { title: 'Shop Billing Software Plans & Demo | Apna Galla', description: 'Compare Starter ₹75, Smart ₹120 and Pro ₹210 monthly plans for billing, khata, inventory and eligible advanced features. Request a demo without a payment gateway.' },
  '/business-types': { title: 'Billing & Khata Software for Indian Shop Types | Apna Galla', description: 'Explore shop workflows for kirana, garments, pharmacy, hardware, footwear, electrical and more. Choose billing, stock and hisaab tools relevant to your business.' },
};
export function schemaBreadcrumbs(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (!parts.length) return [];
  const labels: Record<string,string> = { features:'Features', 'business-types':'Business types', blog:'Shopkeeper guides', glossary:'Hisaab glossary', grocery:'Kirana', khata:'Khata', 'daily-galla':'Daily Galla' };
  const items = [{ name:'Home', path:'/' }, ...parts.map((part,index)=>({name:labels[part] || part.replace(/-/g,' '),path:'/'+parts.slice(0,index+1).join('/')}))];
  return [{ '@type':'BreadcrumbList', '@id':canonicalUrl(pathname)+'#breadcrumbs', itemListElement:items.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.name,item:canonicalUrl(item.path)})) }];
}
