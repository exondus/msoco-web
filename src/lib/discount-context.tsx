'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import client from './apollo-client';
import { GET_SALE_DISCOUNT } from './queries';
import { parseDiscountFromBody } from './discount-parser';
import { DISCOUNT_CONFIG } from './discount-config';

export interface DiscountContextType {
  isActive: boolean;
  loading: boolean;
  percentage: number;
  copy: string;
  discountedPrice(originalPrice: number): number;
}

const DiscountContext = createContext<DiscountContextType | null>(null);

export function DiscountProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DiscountContextType>({
    isActive: false,
    loading: true,
    percentage: 0,
    copy: '',
    discountedPrice: (price: number) => price,
  });

  useEffect(() => {
    async function fetchDiscount() {
      try {
        if (DISCOUNT_CONFIG.active === true) {
          setState({
            isActive: true,
            loading: false,
            percentage: DISCOUNT_CONFIG.percentage,
            copy: DISCOUNT_CONFIG.copy,
            discountedPrice: (price: number) =>
              Math.round(price * (1 - DISCOUNT_CONFIG.percentage / 100)),
          });
          return;
        }

        const { data } = await client.query({
          query: GET_SALE_DISCOUNT,
          fetchPolicy: 'network-only',
        });
        const posts = (data as Record<string, any>)?.posts?.nodes || [];


        if (posts.length > 0) {
          const firstPost = posts[0];
          const parsed = parseDiscountFromBody(firstPost.content);

          if (parsed) {
            setState({
              isActive: true,
              loading: false,
              percentage: parsed.percentage,
              copy: parsed.copy,
              discountedPrice: (price: number) =>
                Math.round(price * (1 - parsed.percentage / 100)),
            });
            return;
          }
        }

        setState({
          isActive: false,
          loading: false,
          percentage: 0,
          copy: '',
          discountedPrice: (price: number) => price,
        });
      } catch (error) {
        console.error('[Discount] Error fetching discount:', error);
        setState({
          isActive: false,
          loading: false,
          percentage: 0,
          copy: '',
          discountedPrice: (price: number) => price,
        });
      }
    }

    fetchDiscount();
  }, []);

  return (
    <DiscountContext.Provider value={state}>
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
