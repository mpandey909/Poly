'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      q: 'How long does the installation take?',
      a: 'Standard installation is completed within 24-48 hours of booking. Our team will contact you to schedule a convenient time.'
    },
    {
      q: 'Are there any hidden data caps?',
      a: 'No, all our broadband plans offer truly unlimited data without any FUP (Fair Usage Policy) speed drops.'
    },
    {
      q: 'Do I need to buy my own router?',
      a: 'We provide a dual-band smart WiFi router free of cost with all plans of 6 months or higher. For monthly plans, a refundable security deposit may apply.'
    },
    {
      q: 'How do I upgrade or downgrade my plan?',
      a: 'You can easily change your plan at any time through our customer portal or mobile app. The changes will reflect in your next billing cycle.'
    },
    {
      q: 'Is customer support available 24/7?',
      a: 'Yes, our technical support team is available round the clock, 365 days a year via phone, email, and live chat in our app.'
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-violet-100 rounded-full blur-[120px] opacity-50 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-fuchsia-100 rounded-full blur-[120px] opacity-50 transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Support</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Everything you need to know about our services, billing, and installation process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 ${openIdx === idx ? 'ring-2 ring-violet-500/20 border-violet-200' : ''}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between font-semibold text-slate-900 transition-colors focus:outline-none"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="text-lg pr-4">{faq.q}</span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIdx === idx ? 'bg-violet-100 text-violet-600' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                  <ChevronDown className={`transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : 'rotate-0'}`} size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
