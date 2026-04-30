import { motion } from 'framer-motion';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
}

export function SkeletonBox({ width = 'w-full', height = 'h-4', className = '' }: SkeletonProps) {
  return (
    <motion.div
      animate={{ opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className={`${width} ${height} bg-gray-200 rounded ${className}`}
    />
  );
}

export function SkeletonText({ lines = 3, className = '' }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          width="w-full"
          height="h-4"
          className={i === lines - 1 ? 'w-3/4' : ''}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg p-6 ${className}`}>
      <SkeletonBox width="w-1/3" height="h-6" className="mb-4" />
      <SkeletonText lines={4} className="mb-6" />
      <SkeletonBox width="w-full" height="h-10" />
    </div>
  );
}

export function SkeletonGrid({ columns = 3, className = '' }: { columns?: number; className?: string }) {
  return (
    <div className={`grid gap-6 ${className}`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
