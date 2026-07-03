'use client';

import { motion } from 'motion/react';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import networkingImage from '@/src/assets/images/networking_infrastructure_1783060265796.jpg';

export function About() {
  const cards = [
    {
      icon: <Target className="text-violet-500" size={32} />,
      title: 'Our Mission',
      desc: 'To empower communities with seamless, ultra-fast, and reliable digital connectivity that bridges the gap to the future.',
    },
    {
      icon: <Lightbulb className="text-fuchsia-500" size={32} />,
      title: 'Our Vision',
      desc: 'Becoming the leading architect of a fully connected India, where every home and enterprise thrives on flawless networking.',
    },
    {
      icon: <ShieldCheck className="text-indigo-500" size={32} />,
      title: 'Why Choose Us?',
      desc: 'We combine cutting-edge FTTH technology with 24/7 proactive monitoring to ensure you never face a drop in your digital life.',
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">About Poly Informatics</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Connecting you to what matters most.
            </h3>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
              We are a next-generation Internet Service Provider dedicated to delivering uninterrupted fiber broadband. Built on a robust, futuristic infrastructure, we ensure your smart homes and growing businesses are always online, always fast.
            </p>
            
            <div className="space-y-8">
              {cards.map((card, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h4>
                    <p className="text-slate-600 font-light">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <Image
              src={networkingImage}
              alt="Modern Infrastructure"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-4xl font-display font-bold mb-2">20 Years</div>
              <div className="text-lg text-slate-200">Of Networking Excellence</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
