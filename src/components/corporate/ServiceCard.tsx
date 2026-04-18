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
    <div className="bg-gray-50 border border-gray-100 p-8 hover:border-corporate-blue transition-all group relative overflow-hidden flex flex-col gap-6">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 border-t-2 border-r-2 border-corporate-blue" />
      </div>

      <div>
        <span className="font-inter text-[10px] uppercase tracking-[0.4em] text-corporate-blue font-bold block mb-2">
          {category}
        </span>
        <h3 className="font-inter font-black text-2xl uppercase tracking-tighter text-black">
          {title}
        </h3>
      </div>

      {benefit && (
        <p className="font-inter text-base font-semibold text-black leading-snug">
          {benefit}
        </p>
      )}

      {outcome && (
        <p className="font-inter text-sm text-black/50 leading-relaxed">
          {outcome}
        </p>
      )}

      <ul className="space-y-3 mt-auto pt-4 border-t border-gray-100 group-hover:border-corporate-blue/20 transition-colors">
        {specs.map((spec, i) => (
          <li key={i} className="flex items-center text-gray-500 text-xs font-inter tracking-wide">
            <span className="w-1.5 h-1.5 bg-corporate-blue/40 rounded-full mr-3" />
            {spec}
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center pt-2">
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 group-hover:text-black transition-colors">
          View Solutions
        </span>
        <svg className="w-4 h-4 text-gray-300 group-hover:text-corporate-blue transform group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;
