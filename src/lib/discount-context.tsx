'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { DISCOUNT_CONFIG } from './discount-config';

export interface DiscountContextType {
  isActive: boolean;
  loading: boolean;
  percentage: number;
  copy: string;
  discountedPrice(originalPrice: number): number;
}

const DiscountContext = createContext<DiscountContextType | null>(null);

const discountValue: DiscountContextType = DISCOUNT_CONFIG.active
  ? {
      isActive: true,
      loading: false,
      percentage: DISCOUNT_CONFIG.percentage,
      copy: DISCOUNT_CONFIG.copy,
      discountedPrice: (price) => Math.round(price * (1 - DISCOUNT_CONFIG.percentage / 100)),
    }
  : {
      isActive: false,
      loading: false,
      percentage: 0,
      copy: '',
      discountedPrice: (price) => price,
    };

export function DiscountProvider({ children }: { children: ReactNode }) {
  return (
    <DiscountContext.Provider value={discountValue}>
      {children}
    </DiscountContext.Provider>
  );
}

export function useDiscount(): DiscountContextType {
  const context = useContext(DiscountContext);
  if (!context) {
    throw new Error('useDiscount must be used within DiscountProvider');
  }
  return context;
}
