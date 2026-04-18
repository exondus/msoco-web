interface CaseStudy {
  id: string;
  eventName: string;
  clientType: string;
  year: number;
  metrics: { label: string; value: string }[];
  summary: string;
}

// Replace with real case studies confirmed with Zakes
const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    eventName: 'KZN Tech Summit',
    clientType: 'Technology Conference',
    year: 2025,
    metrics: [
      { label: 'In-person attendees', value: '1,200' },
      { label: 'Livestream', value: '8,000' },
      { label: 'Satisfaction', value: '94%' },
    ],
    summary: "Full AV production, 4K multi-cam livestream, and post-event highlight reel for KZN's premier technology conference.",
  },
  {
    id: '2',
    eventName: 'Annual Gala Awards',
    clientType: 'Corporate Awards Night',
    year: 2025,
    metrics: [
      { label: 'Attendees', value: '3,000' },
      { label: 'Stages', value: '2' },
      { label: 'Run time', value: '6 hrs' },
    ],
    summary: 'Intelligent lighting rigs, line array audio, LED video walls, and full event documentation across two simultaneous stages.',
  },
  {
    id: '3',
    eventName: 'Tourism Trade Expo',
    clientType: 'Government & Tourism',
    year: 2024,
    metrics: [
      { label: 'Attendees', value: '500' },
      { label: 'Broadcast', value: 'Live TV' },
      { label: 'Duration', value: '2 days' },
    ],
    summary: 'Broadcast-grade production with live television integration, drone aerials, and executive interview packages.',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-40 px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">
            In the <br /><span className="text-corporate-blue">Field.</span>
          </h2>
          <div className="w-20 h-1 bg-corporate-blue" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.id} className="bg-white border border-gray-100 p-8 hover:border-corporate-blue/30 transition-all flex flex-col gap-6">
              <div>
                <span className="font-inter text-[9px] font-black uppercase tracking-[0.4em] text-corporate-blue block mb-2">
                  {cs.clientType} · {cs.year}
                </span>
                <h3 className="font-inter font-black text-2xl uppercase tracking-tighter text-black">{cs.eventName}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="font-inter font-black text-2xl text-black">{m.value}</p>
                    <p className="font-inter text-[9px] uppercase tracking-widest text-black/30 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="font-inter text-sm text-black/50 leading-relaxed flex-1">{cs.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
