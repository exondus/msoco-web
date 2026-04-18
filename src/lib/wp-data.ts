import client from './apollo-client';
import { GET_WEDDING_GALLERY, GET_CORPORATE_SERVICES, GET_ABOUT_CONTENT } from './queries';

/**
 * Server-side data fetching utility for Weddings.
 * Uses Next.js 16 "use cache" for high performance.
 */
export async function getWeddings(category?: string) {
  "use cache";
  try {
    const { data } = await client.query({
      query: GET_WEDDING_GALLERY,
      variables: { category },
    });
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching weddings:', error);
    return [];
  }
}

/**
 * Server-side data fetching utility for Corporate services.
 */
export async function getCorporateServices() {
  "use cache";
  try {
    const { data } = await client.query({
      query: GET_CORPORATE_SERVICES,
    });
    return data?.posts?.nodes || [];
  } catch (error) {
    console.error('Error fetching corporate services:', error);
    return [];
  }
}

export interface AboutContent {
  founderName: string;
  founderBio: string;
  eventsCount: number;
  whiteWeddingsCount: number;
  zuluCeremoniesCount: number;
  yearsInKZN: number;
  founderPhotoUrl: string;
  founderPhotoAlt: string;
}

export async function getAboutContent(): Promise<AboutContent | null> {
  "use cache";
  try {
    const { data } = await client.query({ query: GET_ABOUT_CONTENT });
    const page = data?.page;
    if (!page) return null;
    return {
      founderName: page.aboutMeta.founderName,
      founderBio: page.aboutMeta.founderBio,
      eventsCount: page.aboutMeta.eventsCount,
      whiteWeddingsCount: page.aboutMeta.whiteWeddingsCount,
      zuluCeremoniesCount: page.aboutMeta.zuluCeremoniesCount,
      yearsInKZN: page.aboutMeta.yearsInKZN,
      founderPhotoUrl: page.featuredImage?.node?.sourceUrl ?? '',
      founderPhotoAlt: page.featuredImage?.node?.altText ?? 'Zakes, founder of Msoco Rockers',
    };
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}
