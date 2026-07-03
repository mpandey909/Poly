'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Download, Upload, Activity, Server, Globe, MapPin } from 'lucide-react';

export function SpeedTest() {
  const [testing, setTesting] = useState(false);
  const [results, setResults] = useState({ dl: 0, ul: 0, ping: 0 });
  const [ipAddress, setIpAddress] = useState('Fetching...');
  const [location, setLocation] = useState('Fetching...');

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then(res => res.json())
      .then(data => {
        setIpAddress(data.ip);
        if (data.city && data.country) {
          setLocation(`${data.city}, ${data.country}`);
        } else {
          setLocation('Unknown');
        }
      })
      .catch(() => {
        setIpAddress('Unavailable');
        setLocation('Unavailable');
      });
  }, []);

  const runTest = () => {
    setTesting(true);
    setResults({ dl: 0, ul: 0, ping: 0 });
    
    // Simulate test
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setResults({
        dl: Math.floor(Math.random() * 200) + 100,
        ul: Math.floor(Math.random() * 100) + 50,
        ping: Math.floor(Math.random() * 10) + 2,
      });

      if (progress >= 100) {
        clearInterval(interval);
        setTesting(false);
        setResults({ dl: 312, ul: 145, ping: 4 });
      }
    }, 150);
  };

  return (
    <section className="py-24 bg-violet-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] bg-cover mix-blend-overlay" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Test Your Current Speed</h2>
        <p className="text-violet-100 mb-12 text-lg font-light">See how your current connection measures up. We bet we can do better.</p>
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium tracking-wide">
            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10 text-violet-200">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <Server size={14} className="text-violet-300" />
              <span>Server: Ookla</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10 text-violet-200">
              <Globe size={14} className="text-violet-300" />
              <span>IP: {ipAddress}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10 text-violet-200">
              <MapPin size={14} className="text-violet-300" />
              <span>{location}</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Download className="text-fuchsia-300 mb-2" size={24} />
              <div className="text-sm text-violet-200 mb-1 uppercase tracking-widest font-bold">Download</div>
              <div className="text-3xl md:text-5xl font-display font-bold font-mono">
                {results.dl} <span className="text-lg text-violet-200">Mbps</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Upload className="text-purple-300 mb-2" size={24} />
              <div className="text-sm text-violet-200 mb-1 uppercase tracking-widest font-bold">Upload</div>
              <div className="text-3xl md:text-5xl font-display font-bold font-mono">
                {results.ul} <span className="text-lg text-violet-200">Mbps</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Activity className="text-green-300 mb-2" size={24} />
              <div className="text-sm text-violet-200 mb-1 uppercase tracking-widest font-bold">Ping</div>
              <div className="text-3xl md:text-5xl font-display font-bold font-mono">
                {results.ping} <span className="text-lg text-violet-200">ms</span>
              </div>
            </div>
          </div>
          
          <button
            onClick={runTest}
            disabled={testing}
            className={`relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold text-xl transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] ${
              testing 
                ? 'bg-white/20 text-white cursor-not-allowed' 
                : 'bg-white text-violet-600 hover:scale-105 active:scale-95'
            }`}
          >
            {testing ? (
              <span className="flex items-center gap-2">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                  <Activity size={24} />
                </motion.div>
                Testing...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Play size={24} className="fill-current" />
                Start Test
              </span>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
