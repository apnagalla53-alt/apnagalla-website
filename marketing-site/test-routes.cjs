const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const supportHtmlPath = path.join(distDir, 'support', 'index.html');

if (!fs.existsSync(supportHtmlPath)) {
  console.error('FAIL: support.html not found in dist');
  process.exit(1);
}

const html = fs.readFileSync(supportHtmlPath, 'utf8');

const requiredLinks = [
  { label: 'Billing', expectedHref: '/features/billing' },
  { label: 'Stock & Inventory', expectedHref: '/features/inventory' },
  { label: 'Khata Management', expectedHref: '/features/khata' },
  { label: 'GST Invoices', expectedHref: '/features/gst' },
  { label: 'Reports & Profit', expectedHref: '/features/reports' },
  { label: 'Contact Support', expectedHref: '/contact?reason=support' },
];

let allPassed = true;

for (const link of requiredLinks) {
  // Try to match <a href="EXPECTED">... <h3>LABEL</h3>
  // We'll just search for href="EXPECTED" first
  const hrefMatch = html.includes(`href="${link.expectedHref}"`);
  
  if (hrefMatch) {
    console.log(`PASS: Found link to ${link.expectedHref} for ${link.label}`);
  } else {
    console.error(`FAIL: Missing link to ${link.expectedHref} for ${link.label}`);
    allPassed = false;
  }
}

// Verify that the target routes exist as generated HTML files
const targetFiles = [
  'features/billing/index.html',
  'features/inventory/index.html',
  'features/khata/index.html',
  'features/gst/index.html',
  'features/reports/index.html',
  'features/profit/index.html',
  'contact/index.html',
];

for (const target of targetFiles) {
  const targetPath = path.join(distDir, target);
  if (fs.existsSync(targetPath)) {
    console.log(`PASS: Route generated successfully for ${target}`);
  } else {
    console.error(`FAIL: Route not generated for ${target}`);
    allPassed = false;
  }
}

if (!allPassed) {
  process.exit(1);
} else {
  console.log('All routing tests passed!');
  process.exit(0);
}
