import { getAboutContent } from '@/lib/wp-data';

// Mock Apollo client
jest.mock('@/lib/apollo-client', () => ({
  __esModule: true,
  default: {
    query: jest.fn(),
  },
}));

import client from '@/lib/apollo-client';

describe('getAboutContent', () => {
  it('returns about content from WordPress', async () => {
    (client.query as jest.Mock).mockResolvedValue({
      data: {
        page: {
          aboutMeta: {
            founderName: 'Zakes',
            founderBio: 'Founded Msoco Rockers',
            eventsCount: 500,
            whiteWeddingsCount: 120,
            zuluCeremoniesCount: 50,
            yearsInKZN: 10,
          },
          featuredImage: { node: { sourceUrl: '/founder.jpg', altText: 'Zakes' } },
        },
      },
    });

    const result = await getAboutContent();
    expect(result).not.toBeNull();
    expect(result?.founderName).toBe('Zakes');
    expect(result?.eventsCount).toBe(500);
  });

  it('returns null on error', async () => {
    (client.query as jest.Mock).mockRejectedValue(new Error('Network error'));
    const result = await getAboutContent();
    expect(result).toBeNull();
  });
});
