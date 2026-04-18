interface ZakesTeaserProps {
  persona?: 'wedding' | 'corporate';
}

export default function ZakesTeaser({ persona = 'wedding' }: ZakesTeaserProps) {
  const isWedding = persona === 'wedding';
  const borderClass = isWedding ? 'border-wedding-gold' : 'border-corporate-blue';
  const accentClass = isWedding ? 'text-wedding-gold' : 'text-corporate-blue';
  const textClass = isWedding ? 'text-wedding-charcoal' : 'text-black';
  const bodyFont = isWedding ? 'font-playfair italic font-light' : 'font-inter font-bold';
  const labelFont = isWedding ? 'font-montserrat' : 'font-inter';

  return (
    <div className={`inline-flex items-center gap-4 border-l-2 pl-4 ${borderClass}`}>
      <div>
        <p className={`text-sm ${bodyFont} ${textClass}`}>
          Led by Zakes — 500+ events, zero failed productions.
        </p>
        <p className={`${labelFont} text-[9px] uppercase tracking-[0.4em] ${accentClass} font-black mt-1`}>
          Founder, Msoco Rockers
        </p>
      </div>
    </div>
  );
}
