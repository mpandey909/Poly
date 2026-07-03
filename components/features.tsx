'use client';

import { motion } from 'motion/react';
import { Cable, Infinity, Gauge, Gamepad2, ShieldCheck, Globe, Wifi, HeadphonesIcon, CreditCard, Smartphone, Router, Activity } from 'lucide-react';

export function Features() {
  const features = [
    { icon: <Cable />, title: 'Fiber to the Home', desc: 'Direct fiber optic line for unmatched stability.' },
    { icon: <Infinity />, title: 'Unlimited Data', desc: 'Zero data caps. Stream and download limitlessly.' },
    { icon: <Gauge />, title: 'Ultra Fast Speed', desc: 'Symmetrical speeds for lag-free performance.' },
    { icon: <Gamepad2 />, title: 'Low Latency Gaming', desc: 'Optimized routing for the lowest ping possible.' },
    { icon: <ShieldCheck />, title: 'Secure Network', desc: 'Enterprise-grade firewall and DDoS protection.' },
    { icon: <Globe />, title: 'IPv6 Ready', desc: 'Future-proof network with native IPv6 support.' },
    { icon: <Wifi />, title: 'Dual Band WiFi', desc: 'Smart routing between 2.4GHz and 5GHz bands.' },
    { icon: <HeadphonesIcon />, title: '24×7 Support', desc: 'Round-the-clock technical assistance.' },
    { icon: <CreditCard />, title: 'Online Billing', desc: 'Easy payments and transparent invoicing.' },
    { icon: <Smartphone />, title: 'Mobile App', desc: 'Manage your entire connection from your phone.' },
    { icon: <Router />, title: 'Smart Router', desc: 'High-performance WiFi hardware included.' },
    { icon: <Activity />, title: 'Network Monitoring', desc: 'Proactive issue detection and resolution.' },
  ];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Why Poly Informatics</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Experience the Difference</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {feat.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
