import Image from 'next/image';
import { motion } from 'framer-motion';
import { CORPORATE_GALLERY_IMAGES, type GalleryImage } from '@/lib/cloudinary-images';

export default function CorporateGalleryLive() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CORPORATE_GALLERY_IMAGES.map((image, index) => (
          <motion.article
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
            className="group relative h-72 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
          >
            <Image
              src={image.sourceUrl}
              alt={image.altText || image.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority={index < 4}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              {image.category && (
                <span className="text-corporate-blue text-xs font-black uppercase tracking-wider mb-2">
                  {image.category}
                </span>
              )}
              <h3 className="text-white font-bold text-sm line-clamp-2">
                {image.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
