// Generate the social card from the vector version of the supplied logo.
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(process.env.CANVAS_MODULE_ROOT
  ? join(process.env.CANVAS_MODULE_ROOT, 'package.json') : import.meta.url);
const { createCanvas, GlobalFonts, loadImage } = require('@napi-rs/canvas');
const root = fileURLToPath(new URL('../', import.meta.url));
// SVG paths are the shared source of truth for both the site and social card.
const lightLogo = await loadImage(join(root, 'assets/brand/elevate-core-logo-light.svg'));
const logoWidth = lightLogo.width;
const logoHeight = lightLogo.height;

GlobalFonts.registerFromPath(join(root, 'assets/fonts/InterVariable.woff2'), 'Inter');
const card = createCanvas(1200, 420);
const context = card.getContext('2d');
context.fillStyle = '#102a43';
context.fillRect(0, 0, 1200, 420);
const displayHeight = 157;
const displayWidth = displayHeight * logoWidth / logoHeight;
context.drawImage(lightLogo, (1200 - displayWidth) / 2, 26, displayWidth, displayHeight);
context.font = '700 32px Inter';
const first = 'Who You Hire Is ';
const second = 'Who You Become.';
const firstWidth = context.measureText(first).width;
const start = (1200 - firstWidth - context.measureText(second).width) / 2;
context.fillStyle = '#F8FAFC';
context.fillText(first, start, 259);
context.fillStyle = '#8DE9CF';
context.fillText(second, start + firstWidth, 259);
context.textAlign = 'center';
context.font = '400 27px Inter';
context.fillStyle = '#F8FAFC';
context.fillText('Recruitment & HR consulting for businesses', 600, 318);
context.fillText('in Ukraine and Europe.', 600, 356);
mkdirSync(join(root, 'public/social'), { recursive: true });
const cardImage = card.toBuffer('image/png');
writeFileSync(join(root, 'public/social/elevate-core-share-v5.png'), cardImage);
writeFileSync(join(root, 'public/social/elevate-core-share-v4.png'), cardImage);
// Keep the old public URL aligned for links that already point to it.
writeFileSync(join(root, 'public/social/elevate-core-share-v3.png'), cardImage);
console.log(`Generated the 1200 × 420 social card from the vector logo.`);
