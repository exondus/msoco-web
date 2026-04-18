interface Stat {
  value: string;
  label: string;
}

interface AboutStatsProps {
  persona: 'wedding' | 'corporate';
  eventsCount?: number;
  whiteWeddingsCount?: number;
  zuluCeremoniesCount?: number;
  yearsInKZN?: number;
}

export default function AboutStats({
  persona,
  eventsCount = 500,
  whiteWeddingsCount = 120,
  zuluCeremoniesCount = 50,
  yearsInKZN = 10,
}: AboutStatsProps) {
  const isWedding = persona === 'wedding';
  const accentText = isWedding ? 'text-wedding-gold' : 'text-corporate-blue';
  const borderColor = isWedding ? 'border-wedding-gold/20' : 'border-corporate-blue/20';

  const stats: Stat[] = [
    { value: `${eventsCount}+`, label: 'Live Events' },
    { value: `${whiteWeddingsCount}+`, label: 'White Weddings' },
    { value: `${zuluCeremoniesCount}+`, label: 'Zulu Ceremonies' },
    { value: `${yearsInKZN} Yrs`, label: 'In KZN' },
  ];

  return (
    <section className={`py-24 border-y ${borderColor} bg-gray-50 px-8`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className={`${isWedding ? 'font-playfair' : 'font-inter font-black'} text-5xl md:text-6xl text-black`}>
              {stat.value}
            </p>
            <p className={`font-montserrat text-[10px] uppercase tracking-[0.4em] ${accentText} font-black mt-3`}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
