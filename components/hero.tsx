'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import { NewConnectionModal } from './new-connection-modal';

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-slate-900">
      <NewConnectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/50 to-indigo-900/50 mix-blend-multiply" />
        
        {/* Glowing Lines Simulation */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent blur-sm" />
        <div className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent blur-md transform -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8"
        >
          <Activity size={16} className="text-fuchsia-400" />
          <span className="text-sm font-medium text-fuchsia-50">99.9% Uptime Guarantee</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight max-w-4xl"
        >
          Lightning Fast <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-500">Fiber Internet</span> <br className="hidden md:block"/> for Home & Business
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl font-light"
        >
          Experience the future of connectivity with our unlimited fiber broadband. 
          Ultra-low latency, symmetric speeds, and rock-solid reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
          >
            Get New Connection
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            href="#plans"
            className="group px-8 py-4 bg-white/10 border border-white/20 text-white hover:bg-white/20 rounded-full font-semibold text-lg transition-all flex items-center justify-center gap-2 backdrop-blur-md"
          >
            View Plans
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform text-fuchsia-400" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll Down</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent" />
      </div>
    </section>
  );
}
