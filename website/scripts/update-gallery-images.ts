import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const galleryPath = join(__dirname, '../data/gallery.json');

interface Image {
  url: string;
  caption: string;
}

interface Site {
  id: string;
  images: Image[];
}

interface Gallery {
  sites: Site[];
}

const gallery: Gallery = JSON.parse(readFileSync(galleryPath, 'utf-8'));

for (const site of gallery.sites) {
  site.images.unshift({
    url: `/${site.id}.png`,
    caption: 'Homepage screenshot'
  });
}

writeFileSync(galleryPath, JSON.stringify(gallery, null, 2));
console.log('Updated gallery.json with screenshot references');
