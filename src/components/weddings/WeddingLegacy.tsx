'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CoreButton from '../ui/CoreButton';
import client from '@/lib/apollo-client';
import { GET_WEDDING_GALLERY } from '@/lib/queries';
import { transformWeddingPostToGalleryImage, type GalleryImage } from '@/lib/wp-image-helpers';

export default function WeddingLegacy() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data } = await client.query({
          query: GET_WEDDING_GALLERY,
          variables: { first: 50 },
        });
        const posts = (data as Record<string, any>)?.posts?.nodes || [];
        const transformedImages = posts
          .map((post: Record<string, any>) => transformWeddingPostToGalleryImage(post))
          .filter((img: GalleryImage | null): img is GalleryImage => img !== null)
          .slice(0, 2); // Use first 2 images for legacy section
        setImages(transformedImages);
      } catch (error) {
        console.error('Error fetching legacy images:', error);
        setImages([]);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) {
    return (
      <section className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          {/* Skeleton image composition */}
          <div className="relative w-full lg:w-1/2 h-[600px]">
            <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10 rounded-sm bg-gray-200 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 z-20 rounded-sm bg-gray-100 animate-pulse border-8 border-white" />
          </div>
          {/* Skeleton text */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="h-3 w-40 bg-gray-200 rounded animate-pulse" />
            <div className="h-12 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-1 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-100 rounded animate-pulse" />
            </div>
            <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mt-4" />
          </div>
        </div>
      </section>
    );
  }

  if (images.length < 2) {
    return null;
  }

  const [img1, img2] = images;

  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        {/* Visual Composition: Overlapping Image Grid */}
        <div className="relative w-full lg:w-1/2 h-[600px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-0 left-0 w-3/4 h-3/4 z-10 shadow-2xl overflow-hidden rounded-sm"
          >
            <Image
              src={img1.src}
              alt={img1.title}
              width={600}
              height={600}
              className="w-full h-full object-cover grayscale-[10%]"
              unoptimized
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-0 right-0 w-3/4 h-3/4 z-20 shadow-2xl border-8 border-white overflow-hidden rounded-sm"
          >
            <Image
              src={img2.src}
              alt={img2.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              unoptimized
              priority
            />
          </motion.div>

          {/* Decorative Zulu Pattern Accent - Using CSS utility instead of missing image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full zulu-pattern -z-0 rotate-6" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-montserrat text-[10px] font-black uppercase tracking-[0.5em] text-wedding-gold mb-4 block">
              The Language of Tradition
            </span>
            <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal leading-none mb-8">
              We Speak <br/><span className="italic">Ceremony.</span>
            </h2>
            <div className="w-24 h-1 bg-wedding-gold mb-12" />
          </motion.div>

          <p className="font-playfair text-xl text-wedding-charcoal/60 leading-relaxed italic">
            Most photographers see a wedding. We see a ceremony. We understand the deep significance of cultural traditions, whether traditional Zulu ceremonies or modern celebrations.
          </p>

          <p className="font-montserrat text-sm text-wedding-charcoal/80 leading-loose max-w-xl font-medium">
            Our specialized cultural expertise ensures your family&apos;s heritage is preserved with the same meticulous care as a high-end white wedding. You focus on the ancestors and your family; we focus on the art of your legacy.
          </p>

          <div className="pt-8">
            <CoreButton variant="outline">Learn About Our Expertise</CoreButton>
          </div>
        </div>
      </div>
    </section>
  );
}
