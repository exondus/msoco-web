interface PricingAnchorProps {
  startingPrice: string;
  premiumPrice: string;
}

export default function PricingAnchor({ startingPrice, premiumPrice }: PricingAnchorProps) {
  return (
    <section className="py-24 bg-wedding-bg border-y border-wedding-gold/10 px-8 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <span className="font-montserrat text-[10px] uppercase tracking-[0.5em] text-wedding-gold font-black block">
          Heirloom Investment
        </span>
        <h2 className="font-playfair text-5xl md:text-7xl text-wedding-charcoal tracking-tighter">
          Legacies starting from{' '}
          <span className="text-wedding-gold">{startingPrice}</span>.
        </h2>
        <p className="font-montserrat text-sm text-wedding-charcoal/50 leading-loose uppercase tracking-widest font-bold">
          Custom cinematic productions from {premiumPrice}+. Every selection includes full-day coverage, 4K film, and a curated heritage gallery.
        </p>
        <a
          href="/weddings/pricing"
          className="inline-block font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal border border-wedding-charcoal px-10 py-4 hover:bg-wedding-charcoal hover:text-white transition-all duration-300"
        >
          Explore Tiers & Specifications
        </a>
      </div>
    </section>
  );
}
