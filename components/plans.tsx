'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Zap } from 'lucide-react';
import { NewConnectionModal } from './new-connection-modal';

export function Plans() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    { 
      name: 'Starter', 
      speed: 'Upto 50 Mbps', 
      price: '₹499', 
      isPopular: false,
      features: [
        'Unlimited Data',
        'Free Installation (TC Apply)',
        'Free WiFi Router Single Band'
      ]
    },
    { 
      name: 'Basic', 
      speed: 'Upto 75 Mbps', 
      price: '₹599', 
      isPopular: false,
      features: [
        'Unlimited Data',
        'Free Installation (TC Apply)',
        'Free WiFi Router Single Band'
      ]
    },
    { 
      name: 'Premium', 
      speed: 'Upto 100 Mbps', 
      price: '₹799', 
      isPopular: true,
      features: [
        'Unlimited Data',
        'Free Installation (TC Apply)',
        'Free WiFi Router Dual Band',
        'Static Ip Available',
        'Live Tv',
        'HD Video 4k Gaming Stream'
      ]
    },
    { 
      name: 'Turbo', 
      speed: 'Upto 200 Mbps', 
      price: '₹999', 
      isPopular: false,
      features: [
        'Unlimited Data',
        'Free Installation (TC Apply)',
        'Free WiFi Router Dual Band',
        'Static Ip Available',
        'Live Tv',
        'HD Video 4k Gaming Stream'
      ]
    },
    { 
      name: 'Ultra', 
      speed: 'Upto 300 Mbps', 
      price: '₹1499', 
      isPopular: false,
      features: [
        'Unlimited Data',
        'Free Installation (TC Apply)',
        'Free WiFi Router Dual Band',
        'Static Ip Available',
        'Live Tv',
        'HD Video 4k Gaming Stream'
      ]
    },
  ];

  return (
    <section id="plans" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Broadband Plans</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Choose Your Speed</h3>
          <p className="text-lg text-slate-600 font-light">Symmetric upload and download speeds designed for your digital lifestyle. No hidden caps, just pure performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-[2rem] overflow-hidden transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-500/30 xl:-translate-y-4 xl:scale-105 z-10'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-2'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-bl-xl">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`p-8 border-b text-center ${plan.isPopular ? 'border-white/20' : 'border-slate-100 bg-slate-50/50'}`}>
                <h4 className={`text-lg font-bold uppercase tracking-wider mb-2 ${plan.isPopular ? 'text-violet-200' : 'text-slate-500'}`}>{plan.name}</h4>
                <div className="flex justify-center items-baseline gap-1 mb-1">
                  <span className="text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-display font-extrabold tracking-tight whitespace-nowrap">{plan.speed}</span>
                </div>
                <div className="flex justify-center items-baseline gap-1 mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className={`text-sm font-medium ${plan.isPopular ? 'text-violet-200' : 'text-slate-500'}`}>/ month</span>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        plan.isPopular ? 'bg-white/20 text-white' : 'bg-violet-100 text-violet-600'
                      }`}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-semibold ${plan.isPopular ? 'text-violet-50' : 'text-slate-700'}`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-4 rounded-2xl font-bold text-lg transition-all shadow-md active:scale-95 ${
                  plan.isPopular
                    ? 'bg-white text-violet-600 hover:bg-slate-50 shadow-white/25'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}>
                  Select Plan
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="inline-block bg-amber-100 text-amber-800 border border-amber-200 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm">
            * All plan prices are excluding taxes
          </div>
          <div className="inline-block bg-green-100 text-green-800 border border-green-200 px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-sm">
            * Discounts on Half Yearly/ Yearly Payments
          </div>
        </div>
      </div>
      <NewConnectionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
