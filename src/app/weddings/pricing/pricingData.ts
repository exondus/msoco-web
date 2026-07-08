export type Tier = {
  name: string;
  /** The equivalent landing-page package name, shown as a subtitle. */
  subtitle?: string;
  price: string;
  /** Optional fixed promotional price (e.g. Platinum anniversary special). */
  salePrice?: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
};

export type PricingData = {
  [key: string]: Tier[];
};

// Feature lists are kept consistent with the landing-page packages
// (WeddingPackages.tsx). Heritage=Bronze, Legacy=Silver, Legacy Royale=Gold,
// The Dynasty=Platinum, The Dynasty Royale=Premium.
const BRONZE_FEATURES = [
  '1x Photographer',
  '1x Videographer',
  'One minutes highlights video',
  'A4 Photobook Magazine',
  'A3 Canvas Picture',
  'Extra Photos on USB',
  'Video Output 2x USB',
  'Free Digital Invitation',
];

const SILVER_FEATURES = [
  '1x Photographer',
  '1x Videographer',
  'One minutes highlights video',
  'A3 Photobook Magazine',
  'A3 Canvas Picture',
  'Drone Coverage',
  'Video Output 2x USB',
  'Free Digital Invitation',
];

const GOLD_FEATURES = [
  '1x Photographer',
  '2x Videographers',
  '3 minutes to 5 minutes cinematic video',
  'A3 Photobook Magazine',
  'A2 Canvas Picture',
  'Drone Coverage',
  'Video Output 2x USB',
  'Free Digital Invitation',
];

const PLATINUM_FEATURES = [
  '1x Photographer',
  '2x Videographers',
  'A3 Photobook Magazine',
  '2x A2 Canvas Pictures',
  'Drone Coverage',
  '2x Personalised USBs',
  'Sound system (100 to 150 people)',
  'Free Digital Invitation',
];

const PREMIUM_FEATURES = [
  '2x Photographers',
  '2x Videographers',
  '3 minutes to 5 minutes cinematic video',
  'A1 & A2 Canvas Pictures',
  'Layflat Photobook Magazine',
  'Drone Coverage',
  '2x Personalised USBs',
  'Sound system (200 to 400 people)',
  'Free Digital Invitation',
];

export const PRICING_DATA: PricingData = {
  wedding: [
    {
      name: 'Heritage',
      subtitle: 'Bronze',
      price: 'R12,000',
      description: 'The foundation of your cinematic legacy.',
      features: BRONZE_FEATURES,
      cta: 'Book Heritage',
    },
    {
      name: 'Legacy',
      subtitle: 'Silver',
      price: 'R15,000',
      description: 'Comprehensive storytelling for your special day.',
      features: SILVER_FEATURES,
      cta: 'Secure Legacy',
      recommended: true,
    },
    {
      name: 'Legacy Royale',
      subtitle: 'Gold',
      price: 'R18,000',
      description: 'Elevated perspectives for a grander narrative.',
      features: GOLD_FEATURES,
      cta: 'Request Royale',
    },
  ],
  umembeso: [
    {
      name: 'Heritage (U)',
      subtitle: 'Bronze',
      price: 'R12,000',
      description: 'Capturing the heart of your traditional ceremony.',
      features: BRONZE_FEATURES,
      cta: 'Book Heritage',
    },
    {
      name: 'Legacy (U)',
      subtitle: 'Silver',
      price: 'R15,000',
      description: 'Detailed documentation of your cultural union.',
      features: SILVER_FEATURES,
      cta: 'Secure Legacy',
      recommended: true,
    },
    {
      name: 'Legacy Royale (U)',
      subtitle: 'Gold',
      price: 'R18,000',
      description: 'The complete traditional coverage suite.',
      features: GOLD_FEATURES,
      cta: 'Request Royale',
    },
  ],
  union: [
    {
      name: 'The Dynasty',
      subtitle: 'Platinum',
      price: 'R26,000',
      salePrice: 'R20,000',
      description: 'The ultimate production for multi-day legacies.',
      features: PLATINUM_FEATURES,
      cta: 'Commission Dynasty',
    },
    {
      name: 'The Dynasty Royale',
      subtitle: 'Premium',
      price: 'R30,000',
      description: 'The sovereign standard for family history.',
      features: PREMIUM_FEATURES,
      cta: 'Secure Royale',
      recommended: true,
    },
  ],
};
