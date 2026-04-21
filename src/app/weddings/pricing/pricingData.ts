export type Tier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean;
};

export type PricingData = {
  [key: string]: Tier[];
};

export const PRICING_DATA: PricingData = {
  wedding: [
    {
      name: 'Heritage',
      price: 'R12,000',
      description: 'The foundation of your cinematic legacy.',
      features: [
        'Full Day Cinematic Coverage',
        '2 Professional Videographers',
        'All Raw Footage Delivered',
        '4K Cinema-Grade Video',
        'Cinematic Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Book Heritage',
    },
    {
      name: 'Legacy',
      price: 'R15,000',
      description: 'Comprehensive storytelling for your special day.',
      features: [
        'Full Day Cinematic Coverage',
        '2 Videographers + 1 Photographer',
        'All Raw Footage Delivered',
        '4K Cinema-Grade Video',
        'Cinematic Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Secure Legacy',
      recommended: true,
    },
    {
      name: 'Legacy Royale',
      price: 'R18,000',
      description: 'Elevated perspectives for a grander narrative.',
      features: [
        'Full Day Cinematic Coverage',
        '2 Videographers + 1 Photographer',
        'Aerial Drone Cinematography',
        'All Raw Footage Delivered',
        '4K Cinema-Grade Video',
        'Cinematic Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Request Royale',
    },
  ],
  umembeso: [
    {
      name: 'Heritage (U)',
      price: 'R12,000',
      description: 'Capturing the heart of your traditional ceremony.',
      features: [
        'Full Day Ceremonial Coverage',
        '2 Professional Videographers',
        'All Raw Footage Delivered',
        '4K Video Quality',
        'Full Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Book Heritage',
    },
    {
      name: 'Legacy (U)',
      price: 'R15,000',
      description: 'Detailed documentation of your cultural union.',
      features: [
        'Full Day Ceremonial Coverage',
        '2 Videographers + 1 Photographer',
        'All Raw Footage Delivered',
        '4K Video Quality',
        'Full Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Secure Legacy',
      recommended: true,
    },
    {
      name: 'Legacy Royale (U)',
      price: 'R18,000',
      description: 'The complete traditional coverage suite.',
      features: [
        'Full Day Ceremonial Coverage',
        '2 Videographers + 1 Photographer',
        'Aerial Drone Cinematography',
        'All Raw Footage Delivered',
        '4K Video Quality',
        'Full Highlight Film',
        'Digital Photo Album',
        'Transportation (up to 50km)',
      ],
      cta: 'Request Royale',
    },
  ],
  union: [
    {
      name: 'The Dynasty',
      price: 'R28,000',
      description: 'The ultimate production for multi-day legacies.',
      features: [
        '2 Full Days (Wedding + Umembeso)',
        '3 Videographers + 2 Photographers',
        'Aerial Drone Cinematography',
        '4K Video + Documentary Suite',
        'Live Stream (Optional)',
        'Personalized USB + Heirloom Box',
        'A4 Premium Photo Book',
        'Transportation (up to 100km)',
      ],
      cta: 'Commission Dynasty',
    },
    {
      name: 'The Dynasty Royale',
      price: 'R30,000',
      description: 'The sovereign standard for family history.',
      features: [
        '2 Full Days (Wedding + Umembeso)',
        '3 Videographers + 2 Photographers',
        'Aerial Drone Cinematography',
        '4K Video + Photo Suite',
        'Free Pre-Wedding Shoot',
        'A1 Large Format Enlargement',
        'Personalized USB + Heirloom Box',
        'A4 Premium Photo Book',
        'Transportation (up to 100km)',
      ],
      cta: 'Secure Royale',
      recommended: true,
    },
  ],
};
