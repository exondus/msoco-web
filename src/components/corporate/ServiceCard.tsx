import { FC } from 'react';

interface ServiceCardProps {
  title: string;
  category: string;
  specs: string[];
  benefit?: string;
  outcome?: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, category, specs, benefit, outcome }) => {
  return (
    <div className="glass-corporate border border-white/5 p-8 hover:border-corporate-copper/50 transition-all group relative overflow-hidden flex flex-col gap-6 h-full">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 border-t border-r border-corporate-copper" />
      </div>

      <div className="relative z-10">
        <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-corporate-orange font-bold block mb-2">
          {category}
        </span>
        <h3 className="font-inter font-black text-2xl uppercase tracking-tighter text-white group-hover:text-corporate-copper transition-colors">
          {title}
        </h3>
      </div>

      {benefit && (
        <p className="font-inter text-base font-medium text-white/80 leading-snug relative z-10">
          {benefit}
        </p>
      )}

      {outcome && (
        <p className="font-inter text-sm text-white/40 leading-relaxed relative z-10">
          {outcome}
        </p>
      )}

      <ul className="space-y-3 mt-auto pt-4 border-t border-white/5 group-hover:border-corporate-copper/20 transition-colors relative z-10">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center text-white/50 text-xs font-inter tracking-wide">
            <span className="w-1.5 h-1.5 bg-corporate-copper/40 rounded-full mr-3" />
            {spec}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-2 relative z-10">
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 group-hover:text-white transition-colors">
          Technical Solutions
        </span>
        <svg className="w-4 h-4 text-white/20 group-hover:text-corporate-copper transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Subtle hover glow */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-corporate-copper/5 blur-[80px] rounded-full group-hover:bg-corporate-copper/10 transition-colors" />
    </div>
  );
};

export default ServiceCard;
