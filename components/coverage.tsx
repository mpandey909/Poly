'use client';

import { MapPin, Search, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function Coverage() {
  const cities = ['Golaghat', 'Dibrugarh'];
  const [pinCode, setPinCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'available' | 'unavailable'>('idle');

  const handleCheck = () => {
    const trimmed = pinCode.trim();
    if (!trimmed) {
      setStatus('idle');
      return;
    }
    if (trimmed === '785621' || trimmed === '786001') {
      setStatus('available');
    } else {
      setStatus('unavailable');
    }
  };

  return (
    <section id="coverage" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Service Areas</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">Check Our Coverage</h3>
            <p className="text-lg text-slate-600 font-light mb-8">
              We are rapidly expanding our fiber network across the region. Check if your area is ready for ultra-fast broadband.
            </p>

            <div className="mb-12">
              <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex items-center focus-within:ring-2 focus-within:ring-violet-500 transition-all">
                <Search className="text-slate-400 ml-3 mr-2" size={20} />
                <input 
                  type="text" 
                  value={pinCode}
                  onChange={(e) => {
                    setPinCode(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                  placeholder="Enter your PIN code (e.g. 785621)..." 
                  className="flex-1 bg-transparent border-none focus:outline-none py-3 text-slate-700"
                />
                <button 
                  onClick={handleCheck}
                  className="bg-violet-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-700 transition-colors"
                >
                  Check
                </button>
              </div>

              {status === 'available' && (
                <div className="flex items-center gap-3 bg-green-50 text-green-700 p-4 rounded-xl border border-green-200 mt-4">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                  <p className="font-medium text-sm">Great news! Our service is available at this PIN code.</p>
                </div>
              )}
              {status === 'unavailable' && (
                <div className="flex items-center gap-3 bg-rose-50 text-rose-700 p-4 rounded-xl border border-rose-200 mt-4">
                  <AlertCircle size={20} className="text-rose-500 flex-shrink-0" />
                  <p className="font-medium text-sm">Sorry, we don&apos;t provide service at this PIN code yet.</p>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Currently Live In</div>
              <div className="flex flex-wrap gap-3">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-700 shadow-sm">
                    <MapPin size={16} className="text-violet-500" />
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative h-[500px] bg-slate-200 rounded-3xl overflow-hidden border border-slate-300 shadow-inner">
            {/* Simple Map Placeholder */}
            <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/800/800')] bg-cover opacity-50 mix-blend-luminosity" />
            
            {/* Markers */}
            <div className="absolute top-1/3 left-1/4 animate-bounce">
              <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-violet-500/50">
                <MapPin size={24} />
              </div>
            </div>
            
            <div className="absolute top-1/2 left-2/3 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-violet-500/50">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
