export interface GalleryImage {
  url: string;
  caption: string;
}

export interface GalleryLink {
  label: string;
  url: string;
}

export interface GallerySite {
  id: string;
  name: string;
  url: string;
  description: string;
  category: string;
  date: string;
  images: GalleryImage[];
  links: GalleryLink[];
  highlights?: string[];
}

export interface GalleryData {
  sites: GallerySite[];
}