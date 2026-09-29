// Generate transparent logo variants and the social card from the artwork that
// matches the approved Elevate Core logo screenshot.
import { createRequire } from 'node:module';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(process.env.CANVAS_MODULE_ROOT
  ? join(process.env.CANVAS_MODULE_ROOT, 'package.json') : import.meta.url);
const { createCanvas, GlobalFonts, loadImage } = require('@napi-rs/canvas');
const root = fileURLToPath(new URL('../', import.meta.url));
const navy = [16, 42, 67];
const mint = [141, 233, 207];
const white = [255, 255, 255];
const clamp = value => Math.min(1, Math.max(0, value));

const source = await loadImage(join(root, 'assets/brand/elevate-core-logo-reference.jpg'));
const sourceCanvas = createCanvas(source.width, source.height);
const sourceContext = sourceCanvas.getContext('2d');
sourceContext.drawImage(source, 0, 0);
const pixels = sourceContext.getImageData(0, 0, source.width, source.height).data;

// Separate the dark lettering from the mint artwork to preserve both shapes.
function coverage(index) {
  const r = pixels[index] / 255;
  const g = pixels[index + 1] / 255;
  const b = pixels[index + 2] / 255;
  const greenDifference = g - r;
  return {
    text: clamp((0.9 - (r + g + b) / 3) / 0.18)
      * (1 - clamp((greenDifference - 0.025) / 0.06)),
    accent: clamp((greenDifference - 0.055) / 0.13),
  };
}

let minX = source.width, minY = source.height, maxX = 0, maxY = 0;
for (let y = 0; y < source.height; y++) {
  for (let x = 0; x < source.width; x++) {
    const { text, accent } = coverage((y * source.width + x) * 4);
    if (Math.max(text, accent) < 0.16) continue;
    minX = Math.min(minX, x); minY = Math.min(minY, y);
    maxX = Math.max(maxX, x); maxY = Math.max(maxY, y);
  }
}
if (minX > maxX) throw new Error('Logo artwork was not found in the source image');
const margin = 5;
minX = Math.max(0, minX - margin); minY = Math.max(0, minY - margin);
maxX = Math.min(source.width - 1, maxX + margin);
maxY = Math.min(source.height - 1, maxY + margin);
const logoWidth = maxX - minX + 1;
const logoHeight = maxY - minY + 1;

function logoCanvas(letterColor) {
  const canvas = createCanvas(logoWidth, logoHeight);
  const context = canvas.getContext('2d');
  const image = context.createImageData(logoWidth, logoHeight);
  for (let y = 0; y < logoHeight; y++) {
    for (let x = 0; x < logoWidth; x++) {
      const input = ((y + minY) * source.width + x + minX) * 4;
      const output = (y * logoWidth + x) * 4;
      const { text, accent } = coverage(input);
      const combined = text + accent;
      if (combined < 0.01) continue;
      for (let channel = 0; channel < 3; channel++) {
        image.data[output + channel] = Math.round(
          (letterColor[channel] * text + mint[channel] * accent) / combined);
      }
      image.data[output + 3] = Math.round(clamp(combined) * 255);
    }
  }
  context.putImageData(image, 0, 0);
  return canvas;
}

const darkLogo = logoCanvas(navy);
const lightLogo = logoCanvas(white);
mkdirSync(join(root, 'assets/brand'), { recursive: true });
writeFileSync(join(root, 'assets/brand/elevate-core-logo-dark.png'), darkLogo.toBuffer('image/png'));
writeFileSync(join(root, 'assets/brand/elevate-core-logo-light.png'), lightLogo.toBuffer('image/png'));

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
writeFileSync(join(root, 'public/social/elevate-core-share-v4.png'), cardImage);
// Keep the old public URL aligned for links that already point to it.
writeFileSync(join(root, 'public/social/elevate-core-share-v3.png'), cardImage);
console.log(`Generated ${logoWidth} × ${logoHeight} logo variants and the 1200 × 420 social card.`);
