import Image from 'next/image';
import { motion } from 'framer-motion';
import { WEDDING_GALLERY_IMAGES, type GalleryImage } from '@/lib/cloudinary-images';

export default function WeddingGalleryLive() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {WEDDING_GALLERY_IMAGES.map((image, index) => (
          <motion.article
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative h-96 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText || image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 3}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white font-playfair text-xl font-semibold">
                {image.title}
              </h3>
              <p className="text-white/80 text-sm mt-2">{image.altText}</p>
            </div>
          </motion.article>
        ))}
      </div>

    </div>
  );
}
