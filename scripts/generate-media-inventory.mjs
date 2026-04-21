#!/usr/bin/env node

/**
 * Generate a comprehensive media inventory from WordPress GraphQL
 * This is a CommonJS version that runs without ts-node
 * Run with: node scripts/generate-media-inventory.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the Apollo client
import client from '../src/lib/apollo-client.ts';
import { gql } from '@apollo/client';

const INVENTORY_DIR = path.join(__dirname, '..', 'docs', 'media-inventory');

const GET_ALL_MEDIA_PAGINATED = gql`
  query GetAllMediaPaginated($first: Int!, $after: String) {
    mediaItems(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
        startCursor
      }
      nodes {
        id
        title
        sourceUrl
        altText
        mimeType
        mediaDetails {
          width
          height
          file
        }
        caption
        dateGmt
      }
    }
  }
`;

/**
 * Crawl all media items from WordPress GraphQL endpoint
 */
async function getAllMediaItems(maxItems = 100) {
  const result = {
    total: 0,
    mediaItems: [],
    errors: [],
  };

  let hasNextPage = true;
  let cursor = null;
  let fetched = 0;

  try {
    while (hasNextPage && fetched < maxItems) {
      const variables = {
        first: Math.min(100, maxItems - fetched),
        ...(cursor && { after: cursor }),
      };

      const { data, errors } = await client.query({
        query: GET_ALL_MEDIA_PAGINATED,
        variables,
        fetchPolicy: 'network-only',
      });

      if (errors) {
        result.errors.push(...errors.map((e) => e.message));
        console.error('GraphQL errors:', errors);
      }

      const mediaData = data?.mediaItems;
      if (!mediaData) {
        result.errors.push('No mediaItems found in response');
        break;
      }

      // Process nodes
      const nodes = mediaData.nodes || [];
      nodes.forEach((node) => {
        result.mediaItems.push({
          id: node.id,
          title: node.title || 'Untitled',
          sourceUrl: node.sourceUrl,
          altText: node.altText || '',
          mimeType: node.mimeType,
          width: node.mediaDetails?.width,
          height: node.mediaDetails?.height,
          caption: node.caption,
          dateGmt: node.dateGmt,
          fileName: node.mediaDetails?.file,
        });
        fetched++;
      });

      // Check pagination
      hasNextPage = mediaData.pageInfo?.hasNextPage ?? false;
      cursor = mediaData.pageInfo?.endCursor ?? null;
    }

    result.total = result.mediaItems.length;
  } catch (error) {
    const err = error instanceof Error ? error.message : String(error);
    result.errors.push(`Error fetching media: ${err}`);
    console.error('Failed to fetch media:', error);
  }

  return result;
}

/**
 * Generate markdown report
 */
function generateMarkdownReport(result) {
  const errors = result.errors && result.errors.length > 0;
  const errorSection = errors
    ? `
## ⚠️ Errors During Crawl
\`\`\`
${result.errors.join('\n')}
\`\`\`

`
    : '';

  const byType = {};
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

${items.map((item, idx) => {
  const dimensions = item.width && item.height ? ` (${item.width}x${item.height})` : '';
  const fileName = item.fileName ? `**File:** ${item.fileName}` : '';
  const caption = item.caption ? `**Caption:** ${item.caption}` : '';
  const date = item.dateGmt ? `**Uploaded:** ${new Date(item.dateGmt).toLocaleDateString()}` : '';

  return `
### ${idx + 1}. ${item.title}
- **URL:** [\`${item.sourceUrl}\`](${item.sourceUrl})
- **Alt Text:** ${item.altText || '_Not provided_'}
- **Type:** ${item.mimeType}
- **Dimensions:** ${dimensions || 'Not available'}
${fileName ? `- ${fileName}` : ''}
${caption ? `- ${caption}` : ''}
${date ? `- ${date}` : ''}
`;
}).join('\n')}
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

${errorSection}

---

${detailedSections}

---

## How to Update This Inventory

Run this command to refresh the media inventory:

\`\`\`bash
node scripts/generate-media-inventory.mjs
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
    const byType = {};
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
