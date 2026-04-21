'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/corporate/ServiceCard';
import TechInfrastructure from '@/components/corporate/TechInfrastructure';
import QuickQuote from '@/components/corporate/QuickQuote';
import ClientTestimonials from '@/components/corporate/ClientTestimonials';
import CaseStudies from '@/components/corporate/CaseStudies';
import CorporateGalleryLive from '@/components/corporate/CorporateGalleryLive';
import ZakesTeaser from '@/components/shared/ZakesTeaser';
import MsocoLogo from '@/components/ui/MsocoLogo';
import CoreButton from '@/components/ui/CoreButton';
import CompanyStats from '@/components/shared/CompanyStats';

const CORPORATE_STATS = [
  { value: '260+', label: 'Corporate Videos' },
  { value: '210+', label: 'Live Events Streamed' },
  { value: '1,800+', label: 'Digital Assets' },
  { value: '100%', label: 'On-time Delivery' },
];

const CORPORATE_SERVICES_GRID = [
  { id: 'studio-photo', number: '01', title: 'Studio Photography', description: 'Executive portraits, product photography, and branded content', ctaText: 'View Packages' },
  { id: 'studio-video', number: '02', title: 'Studio Videography', description: 'Commercial production, corporate interviews, and brand films', ctaText: 'View Packages' },
  { id: 'live-stream', number: '03', title: 'Live Streaming', description: 'Multi-camera broadcast to unlimited global viewers', ctaText: 'View Packages' },
  { id: 'drones', number: '04', title: 'Flying Drones', description: 'Aerial cinematography for venues, properties, and events', ctaText: 'View Packages' },
  { id: 'sound', number: '05', title: 'PA & Sound System', description: 'Professional audio engineering and conference management', ctaText: 'View Packages' },
  { id: 'projection', number: '06', title: 'LED Screens & Projections', description: 'Large-scale video walls and projection mapping', ctaText: 'View Packages' },
  { id: 'lighting', number: '07', title: 'Stage & Lighting', description: 'Intelligent lighting rigs and custom stage design', ctaText: 'View Packages' },
  { id: 'product-photo', number: '08', title: 'Product Photography', description: 'Detail photography and commercial product imaging', ctaText: 'View Packages' },
];

const CORPORATE_SERVICES = [
  {
    title: 'Technical Staging',
    category: 'Production',
    benefit: 'Your stage sets the tone before a word is spoken.',
    outcome: 'Intelligent lighting rigs, line arrays, and custom builds that make your brand unmissable.',
    specs: ['Intelligent Lighting Rigs', 'Line Array Audio', 'Custom Stage Builds', 'LED Video Walls'],
  },
  {
    title: 'Broadcast Media',
    category: 'Videography',
    benefit: 'Your message reaches 10,000 people simultaneously.',
    outcome: '4K multi-cam livestream with no venue limits — from Durban to the world.',
    specs: ['4K Multi-cam Livestream', 'Corporate Highlights', 'Executive Interviews', 'Aerial Drone Ops'],
  },
  {
    title: 'Brand Activations',
    category: 'Events',
    benefit: "Create moments your attendees can't stop sharing.",
    outcome: '360 experiences, photo booths, and sound management that become the story.',
    specs: ['Photo Booth Systems', '360 Video Experiences', 'Sound Management', 'Technical Direction'],
  },
  {
    title: 'Corporate Identity',
    category: 'Photography',
    benefit: 'The assets your PR team will use for years.',
    outcome: 'Executive headshots, event documentation, and PR kits delivered at scale.',
    specs: ['Bulk Executive Headshots', 'Product Photography', 'Event Documentation', 'PR Asset Kits'],
  },
];

export default function CorporatePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black font-inter scroll-smooth">
      {/* Navbar */}
      <nav className="fixed w-full flex justify-between items-center p-8 z-[100] bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <MsocoLogo className="h-10 w-44" />
        <div className="hidden md:flex space-x-12 text-[9px] font-black uppercase tracking-[0.4em] text-black/30 items-center">
          <a href="#solutions" className="hover:text-corporate-blue transition-colors">Solutions</a>
          <a href="#infrastructure" className="hover:text-corporate-blue transition-colors">Infrastructure</a>
          <a href="/about" className="hover:text-corporate-blue transition-colors">About</a>
          <CoreButton variant="outline" className="py-2 px-6 border-gray-200 text-black">Get Quote</CoreButton>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center px-8 md:px-16 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block px-4 py-1.5 border-2 border-gray-400 text-gray-300 text-[10px] font-black uppercase tracking-[0.5em] mb-10">
                The Technical Backbone
              </span>
              <h1 className="text-8xl md:text-[13rem] font-black uppercase tracking-tighter leading-[0.75] mb-8 text-white">
                Engineered <br />
                <span className="text-gray-300 italic">Excellence.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-col md:flex-row md:items-end justify-between gap-12"
            >
              <div className="flex flex-col gap-8 max-w-2xl">
                <p className="text-2xl md:text-3xl text-white/60 font-light leading-tight">
                  One Call. One Partner. Zero Technical Anxiety.
                </p>
                <ZakesTeaser persona="corporate" />
              </div>
              <div className="flex gap-4">
                <a href="/corporate/services" className="inline-block bg-gray-300 text-black hover:bg-white font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Client Trust — replaces placeholder text logos */}
        <ClientTestimonials />

        {/* Stats Section */}
        <CompanyStats stats={CORPORATE_STATS} theme="corporate" bgColor="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" textColor="text-white" />

        {/* Service Matrix */}
        <section id="solutions" className="py-40 px-8 md:px-16 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">Solution <br />Matrix.</h2>
              <div className="w-20 h-1 bg-corporate-blue" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CORPORATE_SERVICES.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ServiceCard {...service} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <CaseStudies />

        {/* Portfolio Gallery */}
        <section className="py-40 px-8 md:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 text-black">Work <br />Samples.</h2>
              <p className="text-black/40 text-lg">Real projects. Real results. Real clients.</p>
            </div>
            <CorporateGalleryLive />
          </div>
        </section>

        {/* Technical Deep-Dive */}
        <div id="infrastructure">
          <TechInfrastructure />
        </div>

        {/* Technical Specs Banner */}
        <section className="bg-corporate-blue py-16 px-8 overflow-hidden whitespace-nowrap">
          <div className="flex space-x-24 items-center animate-marquee">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex space-x-24 items-center">
                <span className="text-6xl font-black uppercase tracking-tighter text-white">4K Multi-Cam</span>
                <span className="text-6xl font-black uppercase tracking-tighter text-white/40">Line Array Audio</span>
                <span className="text-6xl font-black uppercase tracking-tighter text-white">DMX Lighting</span>
                <span className="text-6xl font-black uppercase tracking-tighter text-white/40">LED Video Walls</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="p-32 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-24">
          <div className="max-w-xl">
            <MsocoLogo className="h-12 w-48 mb-12" />
            <h4 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-none text-black">Elevate Your <br /><span className="text-corporate-blue">Event</span></h4>
            <p className="text-black/40 text-xl font-light mb-4 font-inter">
              Partner with Durban&apos;s leading technical production house for your corporate and events needs.
            </p>
            <div className="mb-12">
              <ZakesTeaser persona="corporate" />
            </div>
            <div className="flex gap-4">
              <a href="/corporate/pricing" className="inline-block bg-corporate-blue text-white hover:bg-corporate-blue/90 font-montserrat text-[10px] font-black uppercase tracking-[0.3em] py-4 px-12 rounded transition-all duration-300">
                View Packages
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-black/20">
            <div className="space-y-6">
              <p className="text-black/40">Services</p>
              <a href="/corporate/services" className="text-black/60 hover:text-corporate-blue transition-colors block">All Services</a>
              <a href="/corporate/pricing" className="text-corporate-blue block hover:text-corporate-blue/80 transition-colors">Pricing</a>
            </div>
            <div className="space-y-6">
              <p className="text-black/40">Contact</p>
              <p>+27 12 345 6789</p>
              <p>info@msocorockers.co.za</p>
            </div>
          </div>
        </div>
      </footer>

      <QuickQuote />
    </div>
  );
}
