interface CorporateTestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  metric: string;
  initials: string;
}

// Replace with real client data confirmed with Zakes
const TESTIMONIALS: CorporateTestimonial[] = [
  {
    id: '1',
    name: 'Tom Mthembu',
    title: 'Events Manager',
    company: 'Durban ICC',
    quote: 'Msoco handled our 3,000-person annual gala flawlessly. One call, one team, zero issues on the night.',
    metric: '3,000 attendees · 0 technical failures',
    initials: 'TM',
  },
  {
    id: '2',
    name: 'Siya Dlamini',
    title: 'Marketing Director',
    company: 'KZN Tourism',
    quote: 'The livestream quality was broadcast-grade. Our remote audience engagement went up 40% compared to the previous year.',
    metric: '8,000 livestream viewers · +40% engagement',
    initials: 'SD',
  },
  {
    id: '3',
    name: 'Nandi Khumalo',
    title: 'Head of Communications',
    company: 'Standard Bank KZN',
    quote: 'Professional, on-time, and technically superior. They made our conference look like a world-class production.',
    metric: '94% delegate satisfaction rating',
    initials: 'NK',
  },
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 border-y border-gray-100 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-black/20 mb-12 text-center">
          Trusted by Leading Organisations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              className="flex flex-col gap-6 border border-gray-100 p-8 hover:border-corporate-blue/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <span className="font-inter font-black text-sm text-black/40">{t.initials}</span>
                </div>
                <div>
                  <p className="font-inter font-black text-sm text-black">{t.name}</p>
                  <p className="font-inter text-[10px] text-black/40 uppercase tracking-wider mt-0.5">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
              <p className="font-inter text-sm text-black/60 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-inter text-[9px] font-black uppercase tracking-widest text-corporate-blue border-t border-gray-100 pt-4">
                {t.metric}
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
