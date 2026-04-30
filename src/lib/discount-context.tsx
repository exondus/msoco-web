'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import client from './apollo-client';
import { GET_SALE_DISCOUNT } from './queries';
import { parseDiscountFromBody } from './discount-parser';

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
        const { data } = await client.query({
          query: GET_SALE_DISCOUNT,
          fetchPolicy: 'network-only',
        });
        const posts = (data as Record<string, any>)?.posts?.nodes || [];

        console.log('[Discount] Fetched posts:', posts.length, posts);

        if (posts.length > 0) {
          const firstPost = posts[0];
          console.log('[Discount] Found SALE post:', firstPost.title, firstPost.content);
          const parsed = parseDiscountFromBody(firstPost.content);

          if (parsed) {
            console.log('[Discount] Parsed discount:', parsed);
            setState({
              isActive: true,
              loading: false,
              percentage: parsed.percentage,
              copy: parsed.copy,
              discountedPrice: (price: number) =>
                Math.round(price * (1 - parsed.percentage / 100)),
            });
            return;
          } else {
            console.log('[Discount] Failed to parse discount from content:', firstPost.content);
          }
        } else {
          console.log('[Discount] No SALE posts found');
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
