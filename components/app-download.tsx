'use client';

import { motion } from 'motion/react';
import { Smartphone, Download, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function AppDownload() {
  const features = [
    'Pay Bills & Recharge',
    'Track Daily Data Usage',
    'Raise Support Tickets',
    'Upgrade Plans Instantly'
  ];

  return (
    <section className="py-24 bg-violet-600 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/gradient/1920/1080')] bg-cover mix-blend-overlay opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Manage Your Network <br className="hidden lg:block" /> on the Go
            </h2>
            <p className="text-lg text-violet-100 font-light mb-8 max-w-xl leading-relaxed">
              Download the Poly Broadband App to pay bills, track usage, run speed tests, and raise support tickets directly from your smartphone.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-fuchsia-300" size={24} />
                  <span className="text-lg font-medium">{feat}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://apps.apple.com/app/mybroadband/id1527011928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all transform hover:scale-105 active:scale-95 border border-slate-800 shadow-xl"
              >
                <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">Download on the</div>
                  <div className="text-xl font-semibold leading-none mt-0.5">App Store</div>
                </div>
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.h8.csubscriber" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-slate-900 transition-all transform hover:scale-105 active:scale-95 border border-slate-800 shadow-xl"
              >
                <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">GET IT ON</div>
                  <div className="text-xl font-semibold leading-none mt-0.5">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-md">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[1/2] rounded-[3rem] overflow-hidden border-[8px] border-slate-900 shadow-2xl bg-white"
            >
              {/* App UI Mockup */}
              <div className="absolute inset-0 bg-slate-50 flex flex-col">
                {/* Status Bar / Header */}
                <div className="bg-violet-600 p-6 pb-8 text-white shadow-sm">
                  <div className="flex justify-between items-center mb-6 mt-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                        JS
                      </div>
                      <div>
                        <div className="text-[10px] text-violet-200 font-medium uppercase tracking-wider">Welcome back</div>
                        <div className="font-bold text-sm leading-tight">John Smith</div>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Smartphone size={16} />
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="text-violet-100 text-xs mb-1">Current Bill (Due in 3 days)</div>
                    <div className="flex justify-between items-end">
                      <div className="text-3xl font-display font-bold">₹799</div>
                      <button className="bg-white text-violet-600 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm hover:bg-slate-50 transition-colors">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium mb-1">Active Plan</div>
                      <div className="font-bold text-slate-900 text-sm">Premium 100 Mbps</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">Active</div>
                      <div className="text-xs text-slate-500 block">24 Days Left</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-2">
                        <Download size={18} />
                      </div>
                      <div className="text-xs text-slate-500 font-medium">Usage</div>
                      <div className="font-bold text-slate-900">142 GB</div>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-fuchsia-50 text-fuchsia-500 flex items-center justify-center mb-2">
                        <CheckCircle2 size={18} />
                      </div>
                      <div className="text-xs text-slate-500 font-medium">Status</div>
                      <div className="font-bold text-slate-900">Online</div>
                    </div>
                  </div>

                  <div className="mt-auto bg-slate-900 text-white p-4 rounded-2xl flex items-center justify-between shadow-xl">
                    <div>
                      <div className="font-bold text-sm">Need Help?</div>
                      <div className="text-xs text-slate-400 mt-0.5">Raise a support ticket</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
