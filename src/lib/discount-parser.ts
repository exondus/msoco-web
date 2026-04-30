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

  // Extract COPY: "..." (case insensitive, quoted text)
  const copyMatch = body.match(/COPY:\s*"([^"]*)"/i);
  const copy = copyMatch ? copyMatch[1] : '';

  return {
    percentage,
    copy,
  };
}
