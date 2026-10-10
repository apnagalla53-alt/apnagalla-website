const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../../');
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const FAVICON_SOURCE = path.resolve(ROOT_DIR, 'apna galla favicon.svg');
const LOGO_SOURCE = path.resolve(ROOT_DIR, 'apna galla logo.jpeg');

async function main() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  }

  console.log('1. Processing Favicon from apna galla favicon.svg...');
  // Copy exact SVG to public/favicon.svg
  fs.copyFileSync(FAVICON_SOURCE, path.join(PUBLIC_DIR, 'favicon.svg'));

  const renderSvg = (targetSize) =>
    sharp(FAVICON_SOURCE, { density: 300 })
      .resize(targetSize, targetSize)
      .png();

  // Generate 512x512
  await renderSvg(512).toFile(path.join(PUBLIC_DIR, 'android-chrome-512x512.png'));

  // Generate 192x192
  await renderSvg(192).toFile(path.join(PUBLIC_DIR, 'android-chrome-192x192.png'));

  // Apple touch icon (180x180)
  await renderSvg(180).toFile(path.join(PUBLIC_DIR, 'apple-touch-icon.png'));

  // Favicon 32x32 PNG
  await renderSvg(32).toFile(path.join(PUBLIC_DIR, 'favicon-32x32.png'));

  // Favicon 16x16 PNG
  await renderSvg(16).toFile(path.join(PUBLIC_DIR, 'favicon-16x16.png'));

  // Favicon 48x48 PNG (for ICO generation)
  const buf16 = await renderSvg(16).toBuffer();
  const buf32 = await renderSvg(32).toBuffer();
  const buf48 = await renderSvg(48).toBuffer();

  // Create real multi-size .ico file
  const icoBuffer = createIco([
    { size: 16, buffer: buf16 },
    { size: 32, buffer: buf32 },
    { size: 48, buffer: buf48 },
  ]);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'favicon.ico'), icoBuffer);

  console.log('2. Processing Logo...');
  // 2. Process Logo
  // Trim white edges from logo
  const trimmedLogoBuffer = await sharp(LOGO_SOURCE).trim().png().toBuffer();
  const logoTrimmed = () => sharp(trimmedLogoBuffer);
  const logoMeta = await sharp(trimmedLogoBuffer).metadata();
  
  // Save full logo in high-res PNG with transparent white background or crisp clean white
  await logoTrimmed()
    .png({ quality: 95 })
    .toFile(path.join(PUBLIC_DIR, 'logo.png'));

  await logoTrimmed()
    .webp({ quality: 90 })
    .toFile(path.join(PUBLIC_DIR, 'logo.webp'));

  // b) Logo Mark only (the shop icon from top)
  // The exact white gap between mark and text is at row 424-478
  const markHeight = 430;
  const rawMark = await sharp(trimmedLogoBuffer)
    .extract({ left: 0, top: 0, width: logoMeta.width, height: markHeight })
    .trim()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Make white background transparent
  const markRgba = Buffer.alloc(rawMark.info.width * rawMark.info.height * 4);
  for (let i = 0; i < rawMark.info.width * rawMark.info.height; i++) {
    const r = rawMark.data[i * 3];
    const g = rawMark.data[i * 3 + 1];
    const b = rawMark.data[i * 3 + 2];
    markRgba[i * 4] = r;
    markRgba[i * 4 + 1] = g;
    markRgba[i * 4 + 2] = b;
    // White background transparency with smooth transition
    if (r > 248 && g > 248 && b > 248) {
      markRgba[i * 4 + 3] = 0;
    } else if (r > 235 && g > 235 && b > 235) {
      markRgba[i * 4 + 3] = Math.round(255 - ((r - 235) / 13) * 255);
    } else {
      markRgba[i * 4 + 3] = 255;
    }
  }

  await sharp(markRgba, {
    raw: {
      width: rawMark.info.width,
      height: rawMark.info.height,
      channels: 4,
    },
  })
    .trim()
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logo-mark.png'));

  await sharp(markRgba, {
    raw: {
      width: rawMark.info.width,
      height: rawMark.info.height,
      channels: 4,
    },
  })
    .trim()
    .webp()
    .toFile(path.join(PUBLIC_DIR, 'logo-mark.webp'));

  // Also full logo with transparent background
  const rawFull = await sharp(trimmedLogoBuffer).raw().toBuffer({ resolveWithObject: true });
  const fullRgba = Buffer.alloc(rawFull.info.width * rawFull.info.height * 4);
  for (let i = 0; i < rawFull.info.width * rawFull.info.height; i++) {
    const r = rawFull.data[i * 3];
    const g = rawFull.data[i * 3 + 1];
    const b = rawFull.data[i * 3 + 2];
    fullRgba[i * 4] = r;
    fullRgba[i * 4 + 1] = g;
    fullRgba[i * 4 + 2] = b;
    if (r > 248 && g > 248 && b > 248) {
      fullRgba[i * 4 + 3] = 0;
    } else if (r > 235 && g > 235 && b > 235) {
      fullRgba[i * 4 + 3] = Math.round(255 - ((r - 235) / 13) * 255);
    } else {
      fullRgba[i * 4 + 3] = 255;
    }
  }

  await sharp(fullRgba, {
    raw: {
      width: rawFull.info.width,
      height: rawFull.info.height,
      channels: 4,
    },
  })
    .trim()
    .png()
    .toFile(path.join(PUBLIC_DIR, 'logo.png'));

  await sharp(fullRgba, {
    raw: {
      width: rawFull.info.width,
      height: rawFull.info.height,
      channels: 4,
    },
  })
    .trim()
    .webp()
    .toFile(path.join(PUBLIC_DIR, 'logo.webp'));

  // c) OpenGraph / Social share image (1200x630)
  const ogLogoWidth = 460;
  const ogLogo = await logoTrimmed()
    .resize(ogLogoWidth, 340, { fit: 'inside' })
    .png()
    .toBuffer();
  const ogLogoMeta = await sharp(ogLogo).metadata();

  const ogSvg = Buffer.from(
    `<svg width="1200" height="630">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f2f8f5" />
          <stop offset="100%" stop-color="#ddede5" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <rect x="60" y="60" width="1080" height="510" rx="28" fill="#ffffff" stroke="#c5dfd4" stroke-width="2" />
      <text x="600" y="490" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="28" font-weight="700" fill="#07452d" text-anchor="middle" letter-spacing="0.5">India's Smart Retail Billing &amp; Vyapar Platform</text>
      <text x="600" y="525" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="20" font-weight="500" fill="#1d6647" text-anchor="middle">Billing • Stock • Khata • AI Assistant</text>
    </svg>`
  );

  const logoLeft = Math.round((1200 - ogLogoMeta.width) / 2);
  const logoTop = 85;

  await sharp(ogSvg)
    .composite([
      {
        input: ogLogo,
        top: logoTop,
        left: logoLeft,
      },
    ])
    .png()
    .toFile(path.join(PUBLIC_DIR, 'og-image.png'));

  // 3. Create site.webmanifest
  const manifest = {
    name: 'Apna Galla — Smart Vyapar Platform',
    short_name: 'Apna Galla',
    description: 'Dukaan ka hisaab. Bas poochho. Billing, inventory, and retail management.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#07452d',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };

  fs.writeFileSync(
    path.join(PUBLIC_DIR, 'site.webmanifest'),
    JSON.stringify(manifest, null, 2)
  );

  console.log('Asset generation complete!');
}

// Simple ICO generator for PNG images
function createIco(images) {
  const headerLength = 6;
  const dirEntryLength = 16;
  const numImages = images.length;
  
  let offset = headerLength + dirEntryLength * numImages;
  
  const header = Buffer.alloc(headerLength);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(numImages, 4);
  
  const dirEntries = [];
  const buffers = [];
  
  for (const img of images) {
    const entry = Buffer.alloc(dirEntryLength);
    const size = img.size >= 256 ? 0 : img.size;
    entry.writeUInt8(size, 0); // Width
    entry.writeUInt8(size, 1); // Height
    entry.writeUInt8(0, 2);    // Palette
    entry.writeUInt8(0, 3);    // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // Size
    entry.writeUInt32LE(offset, 12); // Offset
    
    dirEntries.push(entry);
    buffers.push(img.buffer);
    offset += img.buffer.length;
  }
  
  return Buffer.concat([header, ...dirEntries, ...buffers]);
}

main().catch(console.error);
