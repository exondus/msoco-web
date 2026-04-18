interface Testimonial {
  id: string;
  names: string;
  location: string;
  ceremonyType: 'traditional' | 'white';
  quote: string;
  initials: string;
}

// Replace with real client data once confirmed with Zakes
const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    names: 'Lerato & Sipho',
    location: 'Durban, KZN',
    ceremonyType: 'traditional',
    quote: "Msoco Rockers didn't just capture our wedding; they honored our culture. The way they filmed our Umembeso was breathtaking. Zakes was with us every step of the way.",
    initials: 'L&S',
  },
  {
    id: '2',
    names: 'Amahle & Thabo',
    location: 'Pietermaritzburg, KZN',
    ceremonyType: 'white',
    quote: 'We wanted a team that understood both our White Wedding and our Umabo. Zakes delivered beyond our expectations — every frame tells our full story.',
    initials: 'A&T',
  },
  {
    id: '3',
    names: 'Nokwanda & Lwazi',
    location: 'Richards Bay, KZN',
    ceremonyType: 'traditional',
    quote: 'The production quality was world-class. Our family still talks about the ceremony film. Worth every rand.',
    initials: 'N&L',
  },
];

export default function WeddingTestimonials() {
  return (
    <section className="py-40 bg-wedding-charcoal px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black mb-6 block">
            What Our Couples Say
          </span>
          <h2 className="font-playfair text-6xl text-white tracking-tighter">Their Words.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.id} className="flex flex-col gap-8 bg-white/5 border border-white/10 p-10 hover:border-wedding-gold/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-wedding-gold/20 border border-wedding-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair text-wedding-gold font-light text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="font-montserrat text-white font-black text-sm uppercase tracking-wider">{t.names}</p>
                  <p className="font-montserrat text-white/40 text-[10px] uppercase tracking-widest mt-1">{t.location}</p>
                </div>
                <span className={`ml-auto text-[9px] font-black uppercase tracking-widest px-3 py-1 border font-montserrat ${
                  t.ceremonyType === 'traditional'
                    ? 'text-wedding-gold border-wedding-gold/30'
                    : 'text-white/60 border-white/20'
                }`}>
                  {t.ceremonyType === 'traditional' ? 'Traditional' : 'White Wedding'}
                </span>
              </div>
              <p className="font-playfair text-xl text-white/80 italic leading-relaxed font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
