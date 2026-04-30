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

  // Extract COPY: ... from HTML (handles HTML entities like &#8220;)
  // Match COPY: followed by any text until </p>
  const copyMatch = body.match(/COPY:\s*([^<]*)/i);
  let copy = copyMatch ? copyMatch[1].trim() : '';

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
