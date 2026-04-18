'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoreButton from '../ui/CoreButton';

export default function QuickQuote() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-[60] bg-corporate-blue text-white px-6 py-3 font-inter font-black uppercase text-[10px] tracking-[0.3em] shadow-2xl flex items-center gap-3 hover:bg-black hover:text-white transition-colors"
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        Quick Quote
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-white border border-gray-100 p-12 max-w-xl w-full relative shadow-3xl rounded-sm"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-black/20 hover:text-black uppercase text-[10px] font-black tracking-widest transition-colors"
              >
                Close [esc]
              </button>

              <span className="text-corporate-blue text-[10px] font-black uppercase tracking-[0.5em] mb-4 block">
                Direct Deployment
              </span>
              <h2 className="text-4xl font-inter font-black text-black uppercase tracking-tighter mb-8 leading-none">
                Request Technical <br/>Spec & Quote.
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="COMPANY NAME" className="bg-transparent border-b border-gray-100 py-4 text-xs font-inter text-black focus:border-corporate-blue outline-none transition-colors" />
                  <input type="email" placeholder="WORK EMAIL" className="bg-transparent border-b border-gray-100 py-4 text-xs font-inter text-black focus:border-corporate-blue outline-none transition-colors" />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-gray-100 py-4 text-xs font-inter text-black/60 focus:border-corporate-blue outline-none appearance-none cursor-pointer">
                    <option>SERVICE: FULL PRODUCTION</option>
                    <option>SERVICE: AUDIO/VISUAL ONLY</option>
                    <option>SERVICE: CORPORATE FILM</option>
                  </select>
                </div>
                <textarea placeholder="EVENT DETAILS & DATE" rows={3} className="w-full bg-transparent border-b border-gray-100 py-4 text-xs font-inter text-black focus:border-corporate-blue outline-none transition-colors resize-none" />
                
                <div className="pt-6">
                  <CoreButton className="w-full">Initialize Request</CoreButton>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
