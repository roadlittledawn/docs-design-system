import { chromium } from 'playwright';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const galleryPath = join(__dirname, '../data/gallery.json');
const outputDir = join(__dirname, '../public');

interface Site {
  id: string;
  url: string;
}

interface Gallery {
  sites: Site[];
}

const gallery: Gallery = JSON.parse(readFileSync(galleryPath, 'utf-8'));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });

for (const site of gallery.sites) {
  console.log(`Taking screenshot of ${site.url}...`);
  await page.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: join(outputDir, `${site.id}.png`) });
}

await browser.close();
console.log(`All screenshots saved to ${outputDir}`);
