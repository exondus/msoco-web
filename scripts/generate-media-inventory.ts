#!/usr/bin/env node

/**
 * Generate a comprehensive media inventory from WordPress GraphQL
 * Run with: npx ts-node scripts/generate-media-inventory.ts
 */

import { getAllMediaItems, getMediaByType, MediaCollectionResult, MediaItem } from '../src/lib/wp-media-crawler.js';
import fs from 'fs';
import path from 'path';

const INVENTORY_DIR = path.join(process.cwd(), 'docs', 'media-inventory');

/**
 * Format file size in human readable format
 */
function formatFileSize(bytes?: number): string {
  if (!bytes) return 'Unknown';
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  return `${size.toFixed(2)} ${units[unitIndex]}`;
}

/**
 * Generate markdown for a media item
 */
function mediaItemToMarkdown(media: MediaItem, index: number): string {
  const dimensions = media.width && media.height ? ` (${media.width}x${media.height})` : '';
  const fileName = media.fileName ? `**File:** ${media.fileName}` : '';
  const caption = media.caption ? `**Caption:** ${media.caption}` : '';
  const date = media.dateGmt ? `**Uploaded:** ${new Date(media.dateGmt).toLocaleDateString()}` : '';

  return `
### ${index}. ${media.title}
- **URL:** [\`${media.sourceUrl}\`](${media.sourceUrl})
- **Alt Text:** ${media.altText || '_Not provided_'}
- **Type:** ${media.mimeType}
- **Dimensions:** ${dimensions || 'Not available'}
${fileName ? `- ${fileName}` : ''}
${caption ? `- ${caption}` : ''}
${date ? `- ${date}` : ''}
`;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(result: MediaCollectionResult): string {
  const errors = result.errors && result.errors.length > 0;
  const errorSection = errors
    ? `
## ⚠️ Errors During Crawl
\`\`\`
${result.errors?.join('\n')}
\`\`\`

`
    : '';

  const byType: { [key: string]: MediaItem[] } = {};
  result.mediaItems.forEach((item) => {
    const type = item.mimeType?.split('/')[0] || 'other';
    if (!byType[type]) byType[type] = [];
    byType[type].push(item);
  });

  let typeBreakdownMarkdown = '## Media Breakdown by Type\n\n';
  Object.entries(byType).forEach(([type, items]) => {
    typeBreakdownMarkdown += `- **${type}:** ${items.length} items\n`;
  });

  // Group by type sections
  let detailedSections = '';
  Object.entries(byType).forEach(([type, items]) => {
    detailedSections += `
## ${type.charAt(0).toUpperCase() + type.slice(1)} Items (${items.length})

${items.map((item, idx) => mediaItemToMarkdown(item, idx + 1)).join('\n')}
`;
  });

  return `# WordPress Media Inventory

**Generated:** ${new Date().toISOString()}
**Total Items:** ${result.total}

## Quick Stats

${typeBreakdownMarkdown}

## GraphQL Integration Guide

Your Next.js project is configured to pull images from your WordPress site. The Apollo Client is already set up to query the WordPress GraphQL endpoint at:

\`\`\`
https://www.msocorockers.co.za/graphql
\`\`\`

### Using Media in Next.js Components

#### 1. **Direct Image URL** (Simple approach)
\`\`\`tsx
import Image from 'next/image';

function MyComponent() {
  return (
    <Image
      src="https://www.msocorockers.co.za/wp-content/uploads/image.jpg"
      alt="Description"
      width={1200}
      height={800}
    />
  );
}
\`\`\`

#### 2. **From GraphQL Query** (Recommended)
\`\`\`tsx
import { useQuery } from '@apollo/client';
import Image from 'next/image';
import { GET_WEDDING_GALLERY } from '@/lib/queries';

function WeddingGallery() {
  const { data } = useQuery(GET_WEDDING_GALLERY);

  return (
    <div>
      {data?.posts?.nodes?.map((post) => (
        <Image
          key={post.id}
          src={post.featuredImage?.node?.sourceUrl}
          alt={post.featuredImage?.node?.altText}
          width={post.featuredImage?.node?.mediaDetails?.width || 1200}
          height={post.featuredImage?.node?.mediaDetails?.height || 800}
        />
      ))}
    </div>
  );
}
\`\`\`

#### 3. **Using Media Crawler**
\`\`\`tsx
import { getAllMediaItems, transformToImageProps } from '@/lib/wp-media-crawler';
import Image from 'next/image';

export async function MediaGallery() {
  const { mediaItems } = await getAllMediaItems(50);

  return (
    <div className="grid grid-cols-3 gap-4">
      {mediaItems.map((media) => (
        <Image
          key={media.id}
          {...transformToImageProps(media)}
          className="rounded-lg"
        />
      ))}
    </div>
  );
}
\`\`\`

### Filtering Media in Queries

You can filter media in your GraphQL queries:

\`\`\`graphql
query GetImages {
  mediaItems(first: 50, where: { mimeType: "image/jpeg" }) {
    nodes {
      id
      sourceUrl
      altText
      mediaDetails {
        width
        height
      }
    }
  }
}
\`\`\`

### Next.js Image Optimization

Your \`next.config.ts\` is already configured to accept images from WordPress:

\`\`\`typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.msocorockers.co.za',
    },
  ],
}
\`\`\`

${errorSection}

---

${detailedSections}

---

## How to Update This Inventory

Run this command to refresh the media inventory:

\`\`\`bash
npx ts-node scripts/generate-media-inventory.ts
\`\`\`

The report will be saved to \`docs/media-inventory/index.md\` and will include all current media from your WordPress site.
`;
}

/**
 * Main execution
 */
async function main() {
  console.log('🔍 Crawling WordPress media library...\n');

  try {
    // Create directory if it doesn't exist
    if (!fs.existsSync(INVENTORY_DIR)) {
      fs.mkdirSync(INVENTORY_DIR, { recursive: true });
    }

    // Fetch all media
    const result = await getAllMediaItems(1000);
    console.log(`✅ Found ${result.total} media items\n`);

    if (result.errors && result.errors.length > 0) {
      console.warn('⚠️  Some errors occurred:');
      result.errors.forEach((err) => console.warn(`  - ${err}`));
      console.log();
    }

    // Generate and save markdown
    const markdown = generateMarkdownReport(result);
    const outputPath = path.join(INVENTORY_DIR, 'index.md');
    fs.writeFileSync(outputPath, markdown, 'utf-8');

    console.log(`📄 Media inventory saved to: ${outputPath}\n`);

    // Save JSON copy for programmatic access
    const jsonPath = path.join(INVENTORY_DIR, 'media-items.json');
    fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2), 'utf-8');
    console.log(`📋 JSON copy saved to: ${jsonPath}\n`);

    // Print summary
    const byType: { [key: string]: number } = {};
    result.mediaItems.forEach((item) => {
      const type = item.mimeType?.split('/')[0] || 'other';
      byType[type] = (byType[type] || 0) + 1;
    });

    console.log('📊 Media Summary:');
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} items`);
    });
    console.log();
  } catch (error) {
    console.error('❌ Error generating inventory:', error);
    process.exit(1);
  }
}

main();
