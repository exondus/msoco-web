'use client';

import { useDiscount } from '@/lib/discount-context';

export default function DiscountBadge() {
  const { isActive, percentage } = useDiscount();

  if (!isActive) return null;

  return (
    <span className="inline-block ml-2 px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
      {percentage}% OFF
    </span>
  );
}
