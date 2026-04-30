export interface DiscountData {
  percentage: number;
  copy: string;
}

export function parseDiscountFromBody(body: string): DiscountData | null {
  if (!body) return null;

  // Extract DISCOUNT: X% (case insensitive)
  const discountMatch = body.match(/DISCOUNT:\s*(\d+)%/i);
  const percentage = discountMatch ? parseInt(discountMatch[1], 10) : null;

  if (percentage === null) return null;

  // Extract COPY: ... from HTML (handles HTML entities and tags)
  // Capture everything after COPY: to end of string, then strip HTML tags
  const copyMatch = body.match(/COPY:\s*([\s\S]*)/i);
  let copy = copyMatch ? copyMatch[1] : '';

  // Strip all HTML tags and collapse whitespace
  copy = copy
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  // Decode HTML entities
  copy = copy
    .replace(/&#8220;/g, '"')  // left double quote
    .replace(/&#8221;/g, '"')  // right double quote
    .replace(/&#8217;/g, "'")  // right single quote
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();

  return {
    percentage,
    copy,
  };
}
