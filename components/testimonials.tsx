'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export function Testimonials() {
  const reviews = [
    {
      name: 'Aditya Sharma',
      role: 'Freelance Developer',
      text: 'Since switching to Poly Informatics, I have never experienced a drop during my client calls. The symmetrical 100 Mbps plan is a game changer for uploading code and assets.',
      rating: 5,
      image: 'https://picsum.photos/seed/user1/100/100'
    },
    {
      name: 'Priya Patel',
      role: 'Small Business Owner',
      text: 'Their enterprise support is truly 24x7. We had a configuration issue with our static IP at 2 AM and their team resolved it within minutes. Highly recommended.',
      rating: 5,
      image: 'https://picsum.photos/seed/user2/100/100'
    },
    {
      name: 'Rahul Verma',
      role: 'Gamer',
      text: 'Low latency is crucial for me, and this connection delivers a consistent 4ms ping to local servers. No more lag spikes during competitive matches!',
      rating: 5,
      image: 'https://picsum.photos/seed/user3/100/100'
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-violet-900/20 mix-blend-multiply" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-fuchsia-400 uppercase mb-3">Customer Stories</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">Don&apos;t Just Take Our Word For It</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-white/10 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-fuchsia-400 text-fuchsia-400" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 font-light leading-relaxed">&quot;{review.text}&quot;</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={review.image} alt={review.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="font-bold text-white">{review.name}</div>
                  <div className="text-sm text-fuchsia-400">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
