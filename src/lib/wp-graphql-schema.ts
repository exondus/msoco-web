/**
 * WordPress GraphQL Schema Reference & Query Builder
 *
 * This file contains common WordPress GraphQL query patterns and type definitions
 * for your headless CMS integration.
 */

import { gql } from '@apollo/client';

// ============================================
// COMMON FRAGMENTS
// ============================================

export const MEDIA_ITEM_FRAGMENT = gql`
  fragment MediaItemFields on MediaItem {
    id
    sourceUrl
    altText
    title
    mimeType
    mediaDetails {
      width
      height
      file
    }
    caption
    description
    dateGmt
  }
`;

export const SEO_FRAGMENT = gql`
  fragment SEOFields on Post {
    seo {
      title
      metaDesc
      focusKeywords
      canonical
      metaRobotsNoindex
      metaRobotsNofollow
    }
  }
`;

export const POST_FIELDS_FRAGMENT = gql`
  fragment PostFields on Post {
    id
    databaseId
    title
    slug
    content
    excerpt
    date
    modified
    author {
      node {
        name
        url
        avatar {
          url
        }
      }
    }
    categories {
      nodes {
        id
        name
        slug
        description
      }
    }
    tags {
      nodes {
        id
        name
        slug
      }
    }
    featuredImage {
      node {
        ...MediaItemFields
      }
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;

// ============================================
// CONTENT QUERIES
// ============================================

/**
 * Get all posts with pagination
 * Useful for galleries, archives, listings
 */
export const GET_POSTS_PAGINATED = gql`
  query GetPostsPaginated(
    $first: Int
    $after: String
    $where: RootQueryToPostConnectionWhereArgs
  ) {
    posts(first: $first, after: $after, where: $where) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      nodes {
        ...PostFields
      }
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get a single post by slug
 */
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      ...PostFields
    }
  }
  ${POST_FIELDS_FRAGMENT}
`;

/**
 * Get pages
 */
export const GET_PAGES = gql`
  query GetPages {
    pages(first: 100) {
      nodes {
        id
        databaseId
        title
        slug
        content
        featuredImage {
          node {
            ...MediaItemFields
          }
        }
        children {
          nodes {
            id
            title
            slug
          }
        }
      }
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;

/**
 * Get page by slug
 */
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(slug: $slug) {
      id
      databaseId
      title
      content
      slug
      uri
      featuredImage {
        node {
          ...MediaItemFields
        }
      }
      parent {
        node {
          title
          slug
        }
      }
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;

// ============================================
// MEDIA QUERIES
// ============================================

/**
 * Get all media with extensive details
 */
export const GET_MEDIA_LIBRARY = gql`
  query GetMediaLibrary(
    $first: Int
    $after: String
    $where: RootQueryToMediaItemConnectionWhereArgs
  ) {
    mediaItems(first: $first, after: $after, where: $where) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ...MediaItemFields
      }
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;

/**
 * Get specific media item by ID
 */
export const GET_MEDIA_BY_ID = gql`
  query GetMediaById($id: ID!) {
    mediaItem(id: $id, idType: DATABASE_ID) {
      ...MediaItemFields
    }
  }
  ${MEDIA_ITEM_FRAGMENT}
`;

// ============================================
// TAXONOMY QUERIES
// ============================================

/**
 * Get all categories with posts
 */
export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(first: 100) {
      nodes {
        id
        databaseId
        name
        slug
        description
        posts {
          nodes {
            id
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * Get all tags
 */
export const GET_TAGS = gql`
  query GetTags($first: Int) {
    tags(first: $first) {
      nodes {
        id
        databaseId
        name
        slug
        description
        count
      }
    }
  }
`;

// ============================================
// MENU QUERIES
// ============================================

/**
 * Get navigation menu
 */
export const GET_MENU = gql`
  query GetMenu($slug: String!) {
    menu(id: $slug, idType: NAME) {
      menuItems(first: 100) {
        nodes {
          id
          label
          url
          parentId
          order
          target
          title
        }
      }
    }
  }
`;

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface WordPressPost {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  date: string;
  modified: string;
  author?: {
    name: string;
    url: string;
    avatar?: {
      url: string;
    };
  };
  categories: {
    nodes: WordPressCategory[];
  };
  tags: {
    nodes: WordPressTag[];
  };
  featuredImage?: {
    node: WordPressMediaItem;
  };
}

export interface WordPressPage {
  id: string;
  databaseId: number;
  title: string;
  slug: string;
  content: string;
  uri: string;
  featuredImage?: {
    node: WordPressMediaItem;
  };
  parent?: {
    node: {
      title: string;
      slug: string;
    };
  };
}

export interface WordPressMediaItem {
  id: string;
  sourceUrl: string;
  altText: string;
  title: string;
  mimeType: string;
  mediaDetails?: {
    width: number;
    height: number;
    file: string;
  };
  caption?: string;
  description?: string;
  dateGmt?: string;
}

export interface WordPressCategory {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description?: string;
  posts?: {
    nodes: WordPressPost[];
  };
}

export interface WordPressTag {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description?: string;
  count: number;
}

export interface WordPressMenu {
  id: string;
  name: string;
  slug: string;
  menuItems: {
    nodes: WordPressMenuItem[];
  };
}

export interface WordPressMenuItem {
  id: string;
  label: string;
  url: string;
  parentId?: string;
  order: number;
  target?: string;
  title?: string;
}

// ============================================
// CUSTOM QUERY BUILDER UTILITY
// ============================================

export class WordPressQueryBuilder {
  /**
   * Build a query for posts with custom field filters
   *
   * Example:
   * ```
   * const query = new WordPressQueryBuilder()
   *   .posts()
   *   .withImages()
   *   .withCategory('weddings')
   *   .paginated(20)
   *   .build();
   * ```
   */

  private includes: Set<string> = new Set(['title', 'slug', 'content']);
  private category?: string;
  private tag?: string;
  private limit: number = 10;

  posts(): this {
    this.includes.add('posts');
    return this;
  }

  pages(): this {
    this.includes.add('pages');
    return this;
  }

  withImages(): this {
    this.includes.add('featuredImage');
    return this;
  }

  withSEO(): this {
    this.includes.add('seo');
    return this;
  }

  withAuthor(): this {
    this.includes.add('author');
    return this;
  }

  withTaxonomy(): this {
    this.includes.add('categories');
    this.includes.add('tags');
    return this;
  }

  withCategory(category: string): this {
    this.category = category;
    return this;
  }

  withTag(tag: string): this {
    this.tag = tag;
    return this;
  }

  paginated(limit: number): this {
    this.limit = limit;
    return this;
  }

  build(): string {
    // This is a simplified version - in production, you'd use gql template
    const fields = Array.from(this.includes).join(' ');
    return `query { posts(first: ${this.limit}) { nodes { ${fields} } } }`;
  }
}

/**
 * Introspection query to explore available types and fields
 * Useful for discovering custom fields and post types
 */
export const INTROSPECTION_QUERY = gql`
  query IntrospectionQuery {
    __schema {
      types {
        name
        kind
        fields(includeDeprecated: false) {
          name
          type {
            name
            kind
            ofType {
              name
              kind
            }
          }
        }
      }
    }
  }
`;
