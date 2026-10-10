---
name: Emerald Ledger
colors:
  surface: '#f9faf6'
  surface-dim: '#d9dad7'
  surface-bright: '#f9faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f0'
  surface-container: '#edeeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e2e3df'
  on-surface: '#191c1a'
  on-surface-variant: '#3f4943'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#f0f1ed'
  outline: '#6f7a73'
  outline-variant: '#bec9c2'
  surface-tint: '#126b4f'
  primary: '#00513a'
  on-primary: '#ffffff'
  primary-container: '#126b4f'
  on-primary-container: '#98e9c5'
  inverse-primary: '#87d6b4'
  secondary: '#4d635d'
  on-secondary: '#ffffff'
  secondary-container: '#d0e8e0'
  on-secondary-container: '#536963'
  tertiary: '#5c4200'
  on-tertiary: '#ffffff'
  tertiary-container: '#7a5800'
  on-tertiary-container: '#ffd178'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2f3cf'
  primary-fixed-dim: '#87d6b4'
  on-primary-fixed: '#002115'
  on-primary-fixed-variant: '#00513a'
  secondary-fixed: '#d0e8e0'
  secondary-fixed-dim: '#b4cbc5'
  on-secondary-fixed: '#0a1f1b'
  on-secondary-fixed-variant: '#364b46'
  tertiary-fixed: '#ffdea3'
  tertiary-fixed-dim: '#efc060'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#f9faf6'
  on-background: '#191c1a'
  surface-variant: '#e2e3df'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4.25rem
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-ledger:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: 1rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system establishes a high-trust, authoritative, yet approachable environment tailored for Bharat's modern merchants and retail enterprises. The aesthetic bridges institutional banking rigor with the agility of high-velocity point-of-sale operations. 

Key attributes:
- **Atmosphere:** Deeply rooted, prosperous, and technically sophisticated. It balances quiet luxury with high-utility density.
- **Design Movement:** Modern SaaS Pragmatism infused with subtle Classical Ledger elements—combining crisp micro-borders, refined monetary green tones, warm ledger off-whites, and deliberate gold punctuation for high-tier telemetry and AI insights.
- **Tone:** Methodical, transparent, and prompt. UI elements avoid playful frivolity in favor of tactile clarity and unmistakable transactional certainty.

## Colors
The palette enforces strict optical discipline using the 70-20-8-2 distribution:

- **Surface Base (70%):** `#FAFBF7` provides a natural, eye-comfort baseline distinct from sterile pure white. `#FFFFFF` is isolated strictly to interactive elevated cards, ledger rows, and modal containers. Secondary surface `#F3F7F4` provides tonal segmentation for toolbars, sidebars, and data table headers.
- **Structure & Typography (20%):** Deep Midnight Green-Black (`#071C18`) delivers anchoring weight in global navigational structures, hero zones, and footer summaries. Primary headings use `#17211E`, while supporting ledger data relies on `#66736E` (secondary) and `#94A19B` (muted metadata).
- **Emerald Core (8%):** `#126B4F` operates as the primary operational hue, driving default CTA states, active filters, and ledger credit confirmations, shifting to `#0B4F3C` on interaction. `#2EA971` and `#48C98B` signify growth metrics and live inventory health, paired with `#D9F4E7` and `#EAF8F1` for badge surfaces.
- **Sovereign Gold (2%):** `#D5A84B` is held in reserve. It is applied exclusively to AI assistant triggers, VIP merchant tier indicators, GST reconciliation confirmations, and critical ledger balance closures.

Functional states adhere to strict cognitive cues:
- Success: `#179B62`
- Warning: `#E5A62A`
- Error: `#D94A4A`
- Info: `#3679D5`
- Structural Division: `#DDE7E2`

## Typography
The system employs a purposeful typographic tri-system:

1. **Headings (Manrope):** Geometric, precise, and structurally grounded. Its clean geometric curves command authority in large ledger balances, section headers, and metric titles without sacrificing legibility at compact display sizes.
2. **Body Text (Plus Jakarta Sans):** Humanist, open, and friendly. Provides optimal scanning comfort during intensive invoicing sessions, multi-line order processing, and customer relationship logging.
3. **Financial & Data Labels (JetBrains Mono):** Standardized across all currency notations (₹ INR), invoice serial numbers, HSN/SAC codes, and timestamp logs. Monospaced tabular alignment guarantees vertical scanning integrity across fast-scrolling transaction tables.

## Layout & Spacing
The layout follows a fluid-responsive 12-column grid system built on an 8pt architectural rhythm, with an explicit 4pt micro-subdivision for dense retail data tables.

- **Desktop (>= 1280px):** 12 columns, fixed 240px or 64px collapsed tool sidebar, 24px (`1.5rem`) gutters, dynamic section margin up to 1440px max-width container. In billing workflows, layout prioritizes a split 7:5 ratio (Itemized Entry Grid vs. Real-time Invoice Voucher).
- **Tablet (768px – 1279px):** 8 columns, 16px gutters, fluid sidebars that collapse into off-canvas drawers.
- **Mobile (< 768px):** 4 columns, 16px (`1rem`) outer margin, 12px gutters. Sticky single-thumb touch targets anchored to the screen bottom for rapid register tallying and barcode scanner activation.

## Elevation & Depth
Depth is created through tonal layering and low-contrast perimeter definition rather than dramatic shadow blur:

- **Surface Layering:** 
  - Base: `#FAFBF7` (Canvas).
  - Resting Content Layer: `#FFFFFF` paired with an omnipresent 1px hairline border (`#DDE7E2`).
  - Active/Hover Layer: `#FFFFFF` with a diffused ambient shadow (`0 4px 20px -2px rgba(7, 28, 24, 0.05)`).
- **Dark Inversion:** Modals and high-level analytical breakdowns leverage `#071C18` with subtle internal borders (`1px solid rgba(217, 244, 231, 0.08)`) to establish immediate hierarchical separation from normal daylight operations.
- **Tactile Hierarchy:** Interactive cards avoid blur-heavy drop shadows. Instead, depth is signaled through crisp micro-borders and a slight vertical drop on press states (`translateY(1px)`).

## Shapes
A roundedness value of `2` (0.5rem / 8px baseline) provides a modern, balanced silhouette that softens enterprise accounting workflows without degrading metric density:

- **Inputs, Buttons, and Table Controls:** 8px (`0.5rem`) for compact optical symmetry.
- **Cards, Panels, and Billing Slips:** 16px (`1rem` / `rounded-lg`) to distinctively enclose major analytical modules.
- **Drawers, Slide-outs, and Modals:** 24px (`1.5rem` / `rounded-xl`) on entry corners to communicate tactile framing.
- **Status Tags and Metric Pills:** Fully rounded (`9999px`) to immediately signal categorical data rather than actionable entry inputs.

## Components

### Buttons
- **Primary CTA:** Background `#126B4F`, text `#FFFFFF`, border none. Hover state `#0B4F3C`. Focus ring: 2px offset with `#2EA971`.
- **Secondary / Action Outline:** Background `#FFFFFF`, text `#126B4F`, border `1px solid #DDE7E2`. Hover: Background `#EAF8F1`, border `#126B4F`.
- **Hero Dark Action:** Background `#071C18`, text `#FAFBF7`, border `1px solid rgba(255, 255, 255, 0.1)`. Hover: Background `#17211E`.
- **AI Assist / Intelligence:** Background `#071C18`, text `#FAFBF7`, border `1px solid #D5A84B`. Features a subtle `#D5A84B` shimmering icon treatment.

### Data Inputs & Ledger Forms
- **Text & Numeric Fields:** Background `#FFFFFF`, border `1px solid #DDE7E2`, text `#17211E`. Placeholder `#94A19B`. Active/Focus: Border `1.5px solid #126B4F` with zero blur glow.
- **Financial Inputs:** Left-aligned JetBrains Mono currency mark (`₹`) fixed in `#66736E`, background `#FAFBF7` prefix block. Right-aligned numerical input in JetBrains Mono.

### Cards & Ledger Blocks
- Background `#FFFFFF`, border `1px solid #DDE7E2`, border-radius `1rem`. Internal header bars use `#F3F7F4` with border bottom `1px solid #DDE7E2` to structure tabular inventory data clearly.

### Chips & Status Badges
- **Paid / In Stock:** Background `#EAF8F1`, text `#126B4F`, border `1px solid #D9F4E7`.
- **Pending / Credit Due:** Background `#FFF9E6`, text `#B27B00`, border `1px solid #FBE39D`.
- **Overdue / Stock Out:** Background `#FDE8E8`, text `#D94A4A`, border `1px solid #F8B4B4`.
- **GST Verified / Reconciled:** Background `#FAF7EE`, text `#8C6B1C`, border `1px solid #EAD8A4`.

### Checkboxes & Radio Controls
- Base: `18px x 18px` square (rounded 4px) or circle. Border `1.5px solid #DDE7E2`, background `#FFFFFF`.
- Checked: Background `#126B4F`, checkmark `#FFFFFF`, border `#126B4F`.

### Domain-Specific Components
- **Khatabook Balance Strip:** Dual split component. Left partition displays Debit/Lene Baaki (`#D94A4A`), Right partition displays Credit/Dene Baaki (`#126B4F`) on `#F3F7F4` surfaces with JetBrains Mono figures.
- **Quick-Barcode Stream Bar:** Ultra-dense, high-contrast barcode entry strip anchored directly above the billing inventory grid, auto-focused with immediate hotkey prompts.
- **AI Profit Co-Pilot Drawer:** Slide-out telemetry drawer anchored with a `#071C18` header, `#D5A84B` insight callouts, providing daily margin leakage warnings and automated dead-stock notifications.