import { ALL_WEDDING_IMAGES, CORPORATE_IMAGES } from './media-registry';
import { cloudinaryUrl, getAssetDimensions, type CloudinaryAsset } from './cloudinary';

export type MasonryImage = {
  id: string;
  src: string;
  alt: string;
  height: number;
};

export type GalleryImage = {
  id: string;
  title: string;
  sourceUrl: string;
  altText: string;
  width: number;
  height: number;
};

function toGalleryImage(asset: CloudinaryAsset): GalleryImage {
  const dims = getAssetDimensions(asset.orientation);
  return {
    id: asset.id,
    title: asset.alt,
    sourceUrl: cloudinaryUrl(asset.publicId),
    altText: asset.alt,
    ...dims,
  };
}

function toMasonryImage(asset: CloudinaryAsset): MasonryImage {
  return {
    id: asset.id,
    src: cloudinaryUrl(asset.publicId, {
      width: asset.orientation === 'landscape' ? 1200 : 800,
      height: asset.orientation === 'portrait' ? 1200 : 800,
    }),
    alt: asset.alt,
    height: asset.orientation === 'portrait' ? 480 : 320,
  };
}

export const MASONRY_IMAGES: MasonryImage[] = ALL_WEDDING_IMAGES.map(toMasonryImage);
export const WEDDING_GALLERY_IMAGES: GalleryImage[] = ALL_WEDDING_IMAGES.map(toGalleryImage);
export const CORPORATE_GALLERY_IMAGES: GalleryImage[] = CORPORATE_IMAGES.map(toGalleryImage);
