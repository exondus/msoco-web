export type Orientation = 'landscape' | 'portrait';

export type CloudinaryVideo = {
  id: string;
  publicId: string;
  poster?: string;
};
export type WeddingType = 'traditional' | 'white';
export type EventCategory = 'wedding' | 'corporate' | 'portrait';

export type CloudinaryAsset = {
  id: string;
  publicId: string;
  alt: string;
  orientation: Orientation;
  category: EventCategory;
  weddingType?: WeddingType;
  featured?: boolean;
};

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const BASE = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

type UrlOptions = {
  width?: number;
  height?: number;
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
  quality?: 'auto' | number;
  format?: 'auto' | 'webp' | 'jpg';
  gravity?: 'auto' | 'face' | 'center';
};

export function cloudinaryUrl(publicId: string, options: UrlOptions = {}): string {
  const {
    width,
    height,
    crop = 'fill',
    quality = 'auto',
    format = 'auto',
    gravity = 'auto',
  } = options;

  const parts: string[] = [`f_${format}`, `q_${quality}`];

  if (width || height) {
    parts.push(`c_${crop}`);
    if (width) parts.push(`w_${width}`);
    if (height) parts.push(`h_${height}`);
    parts.push(`g_${gravity}`);
  }

  return `${BASE}/${parts.join(',')}/${publicId}`;
}

// Preset sizes for consistent use across the site
export const PRESETS = {
  gallery: (publicId: string, orientation: Orientation) =>
    cloudinaryUrl(publicId, {
      width: orientation === 'landscape' ? 1200 : 800,
      height: orientation === 'landscape' ? 800 : 1200,
    }),

  thumbnail: (publicId: string, orientation: Orientation) =>
    cloudinaryUrl(publicId, {
      width: orientation === 'landscape' ? 600 : 400,
      height: orientation === 'landscape' ? 400 : 600,
    }),

  hero: (publicId: string) =>
    cloudinaryUrl(publicId, { width: 1920, height: 1080 }),

  square: (publicId: string, size = 600) =>
    cloudinaryUrl(publicId, { width: size, height: size }),
} as const;

// Natural dimensions for Next.js Image width/height props
export function getAssetDimensions(orientation: Orientation): { width: number; height: number } {
  return orientation === 'landscape'
    ? { width: 1200, height: 800 }
    : { width: 800, height: 1200 };
}

// Filter helpers
export function cloudinaryVideoUrl(publicId: string, quality: 'auto' | number = 'auto'): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/q_${quality}/${publicId}`;
}

export function filterByCategory(assets: CloudinaryAsset[], category: EventCategory) {
  return assets.filter((a) => a.category === category);
}

export function filterWeddingsByType(assets: CloudinaryAsset[], type: WeddingType) {
  return assets.filter((a) => a.category === 'wedding' && a.weddingType === type);
}

export function getFeatured(assets: CloudinaryAsset[]) {
  return assets.filter((a) => a.featured);
}
