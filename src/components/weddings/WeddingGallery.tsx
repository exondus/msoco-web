'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useQuery } from '@apollo/client/react';
import { GET_WEDDING_PORTFOLIO } from '@/lib/queries';

interface WeddingItem {
  id: string;
  title: string;
  category: 'traditional' | 'white';
  imageUrl: string;
  altText: string;
}

interface WeddingPortfolioNode {
  id: string;
  title: string;
  featuredImage?: { node: { sourceUrl: string; altText: string } };
  weddingMetadata?: { ceremonyType: string };
}

interface WeddingPortfolioData {
  posts: {
    nodes: WeddingPortfolioNode[];
  };
}

function mapToWeddingItem(node: WeddingPortfolioNode): WeddingItem {
  return {
    id: node.id,
    title: node.title,
    category: node.weddingMetadata?.ceremonyType === 'traditional' ? 'traditional' : 'white',
    imageUrl: node.featuredImage?.node.sourceUrl ?? '',
    altText: node.featuredImage?.node.altText ?? node.title,
  };
}

export default function WeddingGallery() {
  const [filter, setFilter] = useState<'all' | 'traditional' | 'white'>('all');
  const { data, loading, error } = useQuery<WeddingPortfolioData>(GET_WEDDING_PORTFOLIO);

  const allItems: WeddingItem[] = data?.posts?.nodes?.map(mapToWeddingItem) ?? [];
  const filteredItems = filter === 'all' ? allItems : allItems.filter(item => item.category === filter);

  if (loading) {
    return (
      <section className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="break-inside-avoid bg-gray-100 animate-pulse rounded-sm" style={{ height: i % 2 === 0 ? '400px' : '280px' }} />
          ))}
        </div>
      </section>
    );
  }

  if (error || filteredItems.length === 0) {
    return (
      <section className="w-full max-w-7xl mx-auto px-6 py-12 text-center">
        <p className="font-playfair text-2xl text-wedding-charcoal/40 italic">Portfolio coming soon.</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-center space-x-8 mb-16">
        {(['all', 'traditional', 'white'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`font-playfair text-lg capitalize transition-all relative pb-2 ${
              filter === cat ? 'text-wedding-gold' : 'text-wedding-charcoal/50 hover:text-wedding-charcoal'
            }`}
          >
            {cat === 'traditional' ? 'Zulu Traditional' : cat}
            {filter === cat && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wedding-gold" />}
          </button>
        ))}
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative break-inside-avoid overflow-hidden rounded-sm group cursor-pointer">
            <Image
              src={item.imageUrl}
              alt={item.altText}
              width={800}
              height={1200}
              className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <span className="text-wedding-gold font-playfair italic text-sm mb-1 uppercase tracking-widest">
                {item.category === 'traditional' ? 'Traditional' : 'White Wedding'}
              </span>
              <h3 className="text-white font-playfair text-xl">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
