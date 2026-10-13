/**
 * Apna Galla — Marketing Site Content Configuration
 * Single source of truth for all public-facing copy, pricing, and features.
 */

export const config = {
  appUrl: import.meta.env.PUBLIC_APP_URL ?? 'https://app.apnagalla.in',
  apiUrl: import.meta.env.PUBLIC_API_URL ?? '',
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://apnagalla.in',
};

export const brand = {
  name: 'Apna Galla',
  domain: 'ApnaGalla.in',
  tagline: 'Dukaan ka hisaab. Bas poochho.',
  taglineSecondary: 'Bill banao. Khata rakho. Stock sambhalo. Business se kuch bhi poochho.',
  description: 'Billing, stock, khata, purchases, expenses aur business ke sawaalon ka jawab — ek simple app mein.',
};

export const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Business Types', href: '/business-types' },
  { label: 'Ask Apna Galla', href: '/ask-apna-galla' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Support', href: '/support' },
] as const;

export const cta = {
  startFree: { label: 'Start Free', href: '/signup' },
  seePlans: { label: 'See Plans', href: '/pricing' },
  signIn: { label: 'Sign In', href: '/login' },
  contact: { label: 'Contact Support', href: '/contact?reason=support' },
  requestDemo: { label: 'Request Demo', href: '/contact?reason=demo' },
  viewFeatures: { label: 'View Features', href: '/features' }
} as const;

export type FeatureStatus = 'available' | 'coming-soon';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: FeatureStatus;
  group: 'SELL' | 'STOCK' | 'MONEY' | 'UNDERSTAND' | 'CONTROL';
  hero: string;
  cover: string[];
}

export const features: Feature[] = [
  { id: 'billing', group: 'SELL', title: 'Billing', description: 'Cash, UPI aur Udhar ke saath fast billing.', icon: 'receipt', status: 'available', hero: 'Fast billing without ERP complexity.', cover: ['Quick item search', 'Quantities', 'Cash/UPI/Udhar', 'Customer selection', 'Discounts', 'Taxes', 'Receipts', 'Stock update'] },
  { id: 'gst', group: 'SELL', title: 'GST Invoices', description: 'Professional GST invoices, without clutter.', icon: 'receipt', status: 'available', hero: 'Professional GST invoices, without clutter.', cover: ['Business GST details', 'Customer GST details', 'Tax breakup (CGST/SGST/IGST)', 'A4 Invoice Print/PDF'] },
  { id: 'inventory', group: 'STOCK', title: 'Inventory', description: 'Stock, low stock, units aur advanced inventory tools.', icon: 'package', status: 'available', hero: 'Stock kitna hai — clearly dekhiye.', cover: ['Current stock', 'Low stock alerts', 'Opening stock', 'Purchase stock', 'Sale deduction', 'Stock movement'] },
  { id: 'advanced-inventory', group: 'STOCK', title: 'Advanced Inventory', description: 'Variants, batch, expiry, and more.', icon: 'package', status: 'available', hero: 'Powerful tools for complex retail.', cover: ['Variants', 'Multi-unit', 'Weight/Length/Area', 'Batch/Expiry/FEFO', 'Serial/Warranty (Pro)', 'Multiple Locations (Future Premium)'] },
  { id: 'purchases', group: 'STOCK', title: 'Purchases', description: 'Track what comes in and where money goes.', icon: 'wallet', status: 'available', hero: 'Keep track of supplier purchases.', cover: ['Supplier selection', 'Itemized purchase', 'Cash/Credit purchase', 'Stock increase', 'Need List to Purchase'] },
  { id: 'khata', group: 'MONEY', title: 'Khata', description: 'Customer aur supplier dues ko clearly track kijiye.', icon: 'book', status: 'available', hero: 'Udhar yaad rakhne ki zarurat nahi.', cover: ['Credit sales', 'Outstanding balance', 'Partial payments', 'Payment history', 'Supplier payables'] },
  { id: 'expenses', group: 'MONEY', title: 'Expenses', description: 'Everyday shop expenses recorded simply.', icon: 'wallet', status: 'available', hero: 'Track all your business expenses.', cover: ['Categories', 'Payment method', 'Expense history', 'Reports'] },
  { id: 'daily-galla', group: 'MONEY', title: 'Daily Galla', description: 'Daily cash reconciliation.', icon: 'wallet', status: 'available', hero: 'Aaj galle mein kitna cash hona chahiye?', cover: ['Opening Cash', 'Cash Sales', 'Dues Received in Cash', 'Cash Expenses'] },
  { id: 'profit', group: 'MONEY', title: 'Profit / COGS', description: 'Understand your net business profit.', icon: 'chart', status: 'available', hero: 'Sirf sale nahi. Business ka profit samajhiye.', cover: ['Gross Profit', 'COGS', 'Operating Expenses', 'Net Business Profit'] },
  { id: 'reports', group: 'UNDERSTAND', title: 'Reports', description: 'Sales, expenses aur plan-supported profit reports.', icon: 'chart', status: 'available', hero: 'All your business numbers in one place.', cover: ['Sales reports', 'Purchases reports', 'Expense reports', 'Stock reports', 'GST reports'] },
  { id: 'ask-apna-galla', group: 'UNDERSTAND', title: 'Ask Apna Galla', description: 'Reports dhoondhne ke bajay business se seedha sawaal poochhiye.', icon: 'message-circle', status: 'available', hero: 'Reports mat dhoondhiye. Apne business se poochhiye.', cover: ['Text questions', 'Business insights (Smart and Pro)', 'Voice questions (Coming Soon)'] }
];

export const askExamples = {
  starter: ['Aaj ki sale kitni hui?', 'Cash kitna aaya?', 'Ramesh se kitna lena hai?', 'Maggi stock mein kitni hai?'],
  smart: ['Sale kam kyu hui?', 'Profit kam kyu hua?', 'Paisa kidhar ja raha hai?'],
  pro: { label: 'Voice Ask Apna Galla', status: 'coming-soon' as FeatureStatus }
};

export const plans = [
  { id: 'starter', name: 'Starter', price: 75, period: '/month', positioning: 'Run your shop', highlighted: false, features: ['Billing', 'Cash / UPI / Udhar', 'Inventory', 'Customer & Supplier Khata', 'Purchases & Expenses', 'Daily Galla', 'Need List', 'Basic Reports', 'Text Ask Apna Galla', 'Items, Stock & Sales Export', 'Backup service access'], ctaLabel: 'Choose Starter', ctaHref: '/signup' },
  { id: 'smart', name: 'Smart', price: 120, period: '/month', positioning: 'Run it better. Understand your business.', badge: 'MOST POPULAR', highlighted: true, features: ['Everything in Starter', 'Item Photos', 'GST Invoices', 'Profit & COGS', 'Business Insights', 'Advanced Inventory', '2 Staff Accounts', 'Better Reports & Exports'], ctaLabel: 'Get Smart', ctaHref: '/signup' },
  { id: 'pro', name: 'Pro', price: 210, period: '/month', positioning: 'Advanced Control', highlighted: false, features: ['Everything in Smart', 'Serial & Warranty', 'Advanced Staff Controls', '5 Staff Accounts', 'Complete Business Export'], ctaLabel: 'Choose Pro', ctaHref: '/signup' }
];

export const dataSafety = {
  headline: 'Your business data stays yours.',
  points: ['Backup service access is included; protection requires configured, verified backups.', 'Your shop data stays isolated from other businesses.', 'Export options depend on your plan; account-exit portability remains available.']
};

export const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Business Types', href: '/business-types' },
    { label: 'Ask Apna Galla', href: '/ask-apna-galla' },
  ],
  features: [
    { label: 'Billing', href: '/features/billing' },
    { label: 'Khata', href: '/features/khata' },
    { label: 'Inventory', href: '/features/inventory' },
    { label: 'GST', href: '/features/gst' },
    { label: 'Reports', href: '/features/reports' }
  ],
  support: [
    { label: 'Help Center', href: '/support' },
    { label: 'Contact', href: '/contact' },
    { label: 'Data Security', href: '/data-security' }
  ],
  company: [
    { label: 'About', href: '/about' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Refund Policy', href: '/refund-policy' },
    { label: 'Referral Terms', href: '/referral-terms' }
  ]
};

export const businessTypes = [
  { id: 'grocery', name: 'Grocery / Kirana', icon: '🛒', tags: ['fast billing', 'stock', 'Khata', 'pack/piece type units', 'low stock', 'purchases'] },
  { id: 'pharmacy', name: 'Pharmacy', icon: '💊', tags: ['billing', 'GST', 'Box/Strip/Tablet', 'Batch', 'Expiry', 'FEFO', 'suppliers', 'Khata'] },
  { id: 'garments', name: 'Garments', icon: '👔', tags: ['Size', 'Color', 'Variants', 'Images', 'Billing', 'Customer Khata', 'Stock'] },
  { id: 'footwear', name: 'Footwear', icon: '👟', tags: ['size variants', 'color', 'images', 'inventory', 'purchases', 'billing'] },
  { id: 'hardware', name: 'Hardware', icon: '🔧', tags: ['piece/box', 'length', 'weight', 'multi-unit', 'supplier dues', 'stock', 'Godown'] },
  { id: 'electrical', name: 'Electrical', icon: '💡', tags: ['roll -> meter', 'pieces', 'stock', 'serial/warranty', 'compatibility/model metadata'] },
  { id: 'cosmetics', name: 'Cosmetics', icon: '💄', tags: ['variants', 'images', 'stock', 'batch/expiry', 'billing', 'customer Khata'] },
  { id: 'mobile-electronics', name: 'Mobile & Electronics', icon: '📱', tags: ['serial/warranty', 'model metadata', 'accessories', 'stock', 'billing'] },
  { id: 'stationery', name: 'Stationery', icon: '📝', tags: ['piece/pack', 'quick billing', 'inventory', 'purchases', 'customer Khata'] },
  { id: 'sanitary', name: 'Sanitary', icon: '🚿', tags: ['units', 'dimensions', 'inventory', 'supplier purchases', 'customer Khata'] }
];

export const seo = {
  home: { title: 'Apna Galla — Billing, Stock, Khata & Business Management', description: 'Manage billing, stock, khata, purchases, expenses and business reports in one simple app built for Indian retailers.' },
};

export const trustValues = [
  { title: 'Billing', description: 'Fast billing with Cash, UPI and Udhar support.' },
  { title: 'Khata', description: 'Customer and supplier dues clearly tracked.' },
  { title: 'Inventory', description: 'Stock management, low stock alerts, advanced tools.' },
  { title: 'Purchases', description: 'Track what comes in and where money goes.' },
  { title: 'Expenses', description: 'Everyday shop expenses recorded simply.' },
  { title: 'Reports', description: 'Sales, expenses and plan-supported profit reports.' },
];

export const askPreview = {
  question: 'Aaj ki sale kitni hui?',
  answer: '₹24,850 ki sale hui.',
  breakdown: [
    { label: 'Cash', value: '₹11,200' },
    { label: 'UPI', value: '₹7,100' },
    { label: 'Udhar', value: '₹6,550' },
  ],
  note: 'Sample preview — illustrative data only',
};
