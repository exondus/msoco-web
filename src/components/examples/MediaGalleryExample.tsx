/**
 * Example Component: WordPress Media Gallery
 *
 * This component demonstrates how to pull images directly from WordPress
 * and display them in your Next.js site.
 *
 * Usage:
 * import { MediaGalleryExample } from '@/components/examples/MediaGalleryExample';
 * export default function Page() {
 *   return <MediaGalleryExample />;
 * }
 */

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import client from '@/lib/apollo-client';
import { GET_POSTS_PAGINATED } from '@/lib/wp-graphql-schema';

interface PostWithImage {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
      mediaDetails?: {
        width: number;
        height: number;
      };
    };
  };
}

export function MediaGalleryExample() {
  const [posts, setPosts] = useState<PostWithImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const { data } = await client.query({
          query: GET_POSTS_PAGINATED,
          variables: {
            first: 12,
            where: { categoryName: 'weddings' },
          },
        });

        setPosts(data?.posts?.nodes || []);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
        setError(errorMessage);
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg text-gray-600">Loading media from WordPress...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded-lg">
        <h3 className="font-semibold text-red-800">Error Loading Media</h3>
        <p className="text-red-700 mt-2">{error}</p>
        <p className="text-sm text-red-600 mt-2">
          Make sure the WordPress GraphQL endpoint is accessible at:
          <br />
          <code className="bg-white px-2 py-1 rounded mt-1 block">
            https://www.msocorockers.co.za/graphql
          </code>
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No posts found from WordPress</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Wedding Gallery</h2>
        <p className="text-gray-600 mt-2">Loaded from WordPress via GraphQL</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const imageUrl = post.featuredImage?.node?.sourceUrl;
          const altText = post.featuredImage?.node?.altText || post.title;
          const width = post.featuredImage?.node?.mediaDetails?.width || 400;
          const height = post.featuredImage?.node?.mediaDetails?.height || 300;

          return (
            <article
              key={post.id}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {imageUrl ? (
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 line-clamp-2">
                  {post.title}
                </h3>
                <a
                  href={`/weddings/${post.slug}`}
                  className="mt-3 inline-block text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Details →
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-semibold text-blue-900">About This Gallery</h4>
        <ul className="mt-2 text-sm text-blue-800 space-y-1">
          <li>✓ Images loaded from: https://www.msocorockers.co.za/graphql</li>
          <li>✓ Total posts displayed: {posts.length}</li>
          <li>✓ Optimized with Next.js Image component</li>
          <li>✓ Responsive grid layout</li>
        </ul>
      </div>
    </div>
  );
}

/**
 * Alternative: Server-side version for better performance
 *
 * This version uses server-side data fetching, which is faster
 * because it doesn't require client-side JavaScript.
 */

import { GET_POSTS_PAGINATED } from '@/lib/wp-graphql-schema';

export async function MediaGalleryServerExample() {
  try {
    const { data } = await client.query({
      query: GET_POSTS_PAGINATED,
      variables: {
        first: 12,
        where: { categoryName: 'weddings' },
      },
    });

    const posts = data?.posts?.nodes || [];

    return (
      <div className="w-full">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Wedding Gallery</h2>
          <p className="text-gray-600 mt-2">
            Server-rendered from WordPress ({posts.length} posts)
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-600">No posts found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: PostWithImage) => {
              const imageUrl = post.featuredImage?.node?.sourceUrl;
              const altText = post.featuredImage?.node?.altText || post.title;

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {imageUrl ? (
                    <div className="relative w-full h-64 bg-gray-200">
                      <Image
                        src={imageUrl}
                        alt={altText}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 bg-gray-300" />
                  )}

                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-900">{post.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching media:', error);
    return (
      <div className="p-4 border border-red-300 bg-red-50 rounded-lg">
        <p className="text-red-800">Failed to load media from WordPress</p>
      </div>
    );
  }
}
