import client from './apollo-client';
import { gql } from '@apollo/client';

// Query to get all media items with their metadata
export const GET_ALL_MEDIA = gql`
  query GetAllMedia($first: Int!) {
    mediaItems(first: $first) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        sourceUrl
        altText
        mimeType
        mediaDetails {
          width
          height
          file
        }
        caption
      }
    }
  }
`;

// Query to get media paginated with cursor
export const GET_ALL_MEDIA_PAGINATED = gql`
  query GetAllMediaPaginated($first: Int!, $after: String) {
    mediaItems(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      nodes {
        id
        title
        sourceUrl
        altText
        mimeType
        mediaDetails {
          width
          height
          file
        }
        caption
        dateGmt
      }
    }
  }
`;

// Query to introspect the schema for custom fields
export const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __schema {
      types {
        name
        kind
        fields {
          name
          type {
            name
            kind
          }
        }
      }
    }
  }
`;

export interface MediaItem {
  id: string;
  title: string;
  sourceUrl: string;
  altText: string;
  mimeType: string;
  width?: number;
  height?: number;
  caption?: string;
  dateGmt?: string;
  fileName?: string;
}

export interface MediaCollectionResult {
  total: number;
  mediaItems: MediaItem[];
  errors?: string[];
}

/**
 * Crawl all media items from WordPress GraphQL endpoint
 */
export async function getAllMediaItems(
  maxItems: number = 100
): Promise<MediaCollectionResult> {
  const result: MediaCollectionResult = {
    total: 0,
    mediaItems: [],
    errors: [],
  };

  let hasNextPage = true;
  let cursor: string | null = null;
  let fetched = 0;

  try {
    while (hasNextPage && fetched < maxItems) {
      const query = cursor ? GET_ALL_MEDIA_PAGINATED : GET_ALL_MEDIA;
      const variables = {
        first: Math.min(100, maxItems - fetched),
        ...(cursor && { after: cursor }),
      };

      const { data, errors } = await client.query({
        query,
        variables,
        fetchPolicy: 'network-only',
      });

      if (errors) {
        result.errors?.push(...errors.map((e) => e.message));
        console.error('GraphQL errors:', errors);
      }

      const mediaData = (data as any)?.mediaItems;
      if (!mediaData) {
        result.errors?.push('No mediaItems found in response');
        break;
      }

      // Process nodes
      const nodes = mediaData.nodes || [];
      nodes.forEach((node: any) => {
        result.mediaItems.push({
          id: node.id,
          title: node.title || 'Untitled',
          sourceUrl: node.sourceUrl,
          altText: node.altText || '',
          mimeType: node.mimeType,
          width: node.mediaDetails?.width,
          height: node.mediaDetails?.height,
          caption: node.caption,
          dateGmt: node.dateGmt,
          fileName: node.mediaDetails?.file,
        });
        fetched++;
      });

      // Check pagination
      hasNextPage = mediaData.pageInfo?.hasNextPage ?? false;
      cursor = mediaData.pageInfo?.endCursor ?? null;
    }

    result.total = result.mediaItems.length;
  } catch (error) {
    const err = error instanceof Error ? error.message : String(error);
    result.errors?.push(`Error fetching media: ${err}`);
    console.error('Failed to fetch media:', error);
  }

  return result;
}

/**
 * Get media items by mime type filter
 */
export async function getMediaByType(
  mimeType: 'image' | 'video' | 'audio' | 'document'
): Promise<MediaItem[]> {
  const result = await getAllMediaItems(1000);
  const mimePrefix = mimeType === 'image' ? 'image/' : `${mimeType}/`;
  return result.mediaItems.filter((item) => item.mimeType?.startsWith(mimePrefix));
}

/**
 * Transform media items into Next.js Image component props
 */
export function transformToImageProps(media: MediaItem) {
  return {
    src: media.sourceUrl,
    alt: media.altText || media.title,
    width: media.width || 1200,
    height: media.height || 800,
    title: media.title,
  };
}
