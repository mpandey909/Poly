'use client';

import { motion } from 'motion/react';
import { Building2, Server, Globe, Shield, Network, Cloud } from 'lucide-react';

export function Business() {
  const solutions = [
    { icon: <Building2 size={24} />, title: 'Enterprise Internet', desc: 'Dedicated 1:1 symmetrical bandwidth for seamless corporate operations.' },
    { icon: <Server size={24} />, title: 'Leased Line (ILL)', desc: 'Uncontended, secure, and highly reliable internet leased lines with SLA.' },
    { icon: <Globe size={24} />, title: 'Static IP', desc: 'Fixed public IP addresses for hosting servers, CCTV, and VPN access.' },
    { icon: <Network size={24} />, title: 'Corporate WiFi', desc: 'Managed campus-wide wireless networking with robust security policies.' },
    { icon: <Shield size={24} />, title: 'VPN Solutions', desc: 'Secure site-to-site and remote access VPN for distributed teams.' },
    { icon: <Cloud size={24} />, title: 'Cloud Networking', desc: 'Direct, low-latency connectivity to major public cloud providers.' },
  ];

  return (
    <section id="business" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500 via-slate-900 to-slate-900" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-fuchsia-400 uppercase mb-3">Business Solutions</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Empower Your Enterprise</h3>
          <p className="text-lg text-slate-300 font-light">
            From startups to large enterprises, our business-grade connectivity solutions are designed to keep your operations running at peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 hover:bg-white/10 p-8 rounded-3xl transition-all group backdrop-blur-sm flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/20 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{item.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
