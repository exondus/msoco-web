export interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
}

export function transformWeddingPostToGalleryImage(post: Record<string, any>): GalleryImage | null {
  const imageUrl = post?.featuredImage?.node?.sourceUrl;
  if (!imageUrl) return null;

  const title = post?.title || 'Wedding Photo';
  const ceremonyType = post?.weddingMetadata?.ceremonyType || 'ceremonies';

  return {
    id: post?.id || Math.random().toString(36),
    title,
    category: ceremonyType.toLowerCase(),
    src: imageUrl,
  };
}

export function transformCorporatePostToGalleryImage(post: Record<string, any>): GalleryImage | null {
  const imageUrl = post?.featuredImage?.node?.sourceUrl;
  if (!imageUrl) return null;

  const title = post?.title || 'Corporate Photo';

  return {
    id: post?.id || Math.random().toString(36),
    title,
    category: 'corporate',
    src: imageUrl,
  };
}
