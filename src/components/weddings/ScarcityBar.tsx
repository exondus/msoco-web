interface ScarcityBarProps {
  remainingDates: number;
  year: number;
}

export default function ScarcityBar({ remainingDates, year }: ScarcityBarProps) {
  if (remainingDates === 0) return null;

  return (
    <div className="w-full bg-wedding-gold py-3 px-6 text-center">
      <p className="font-montserrat text-[10px] font-black uppercase tracking-[0.4em] text-wedding-charcoal">
        Only {remainingDates} dates remaining for the {year} season —{' '}
        <a href="#contact" className="underline underline-offset-4 hover:opacity-70 transition-opacity">
          Secure yours →
        </a>
      </p>
    </div>
  );
}
