'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CoreButton from '../ui/CoreButton';
import { ALL_WEDDING_IMAGES } from '@/lib/media-registry';
import { cloudinaryUrl } from '@/lib/cloudinary';

const LEGACY_IMAGES = ALL_WEDDING_IMAGES.filter((a) => a.featured && a.orientation === 'portrait').slice(0, 2);

export default function WeddingLegacy() {
  if (LEGACY_IMAGES.length < 2) return null;

  const [img1, img2] = LEGACY_IMAGES;

  return (
    <section className="py-32 px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">

        {/* Visual: right image wider, overlapping in front of left */}
        <div className="relative w-full lg:w-1/2 h-[640px] shrink-0">

          {/* Left — traditional, behind */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute left-0 top-[6%] w-[52%] h-[88%] z-0 shadow-lg overflow-hidden rounded-sm"
          >
            <Image
              src={cloudinaryUrl(img1.publicId, { width: 500, height: 900, crop: 'fill', gravity: 'face' })}
              alt={img1.alt}
              fill
              sizes="25vw"
              className="object-cover object-top grayscale-[10%]"
              priority
            />
          </motion.div>

          {/* Right — white wedding, wider, overlapping in front */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-[44%] top-0 w-[65%] h-[88%] z-10 shadow-2xl border-[6px] border-white overflow-hidden rounded-sm"
          >
            <Image
              src={cloudinaryUrl(img2.publicId, { width: 600, height: 900, crop: 'fill', gravity: 'face' })}
              alt={img2.alt}
              fill
              sizes="30vw"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>

        {/* Content */}
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
            <Link href="#packages">
              <CoreButton variant="outline">View Our Packages</CoreButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
