'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Wifi, User } from 'lucide-react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Plans', href: '#plans' },
    { name: 'Business', href: '#business' },
    { name: 'Features', href: '#features' },
    { name: 'Coverage', href: '#coverage' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white group-hover:bg-violet-700 transition-colors">
              <Wifi size={24} />
            </div>
            <div className="flex flex-col">
              <span className={`font-display font-bold text-xl tracking-tight leading-none ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
                Poly Informatics
              </span>
              <span className={`text-[11px] font-semibold uppercase tracking-widest mt-1 ${isScrolled ? 'text-violet-600' : 'text-violet-600 md:text-violet-300'}`}>
                Stay connected
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-violet-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <a href="https://customer.polyinformatics.in/" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-violet-500/25">
              <User size={18} />
              <span>Customer Portal</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-900 bg-white/50 backdrop-blur rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl md:hidden"
        >
          <div className="p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 font-medium p-2 hover:bg-slate-50 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://customer.polyinformatics.in/"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-violet-600 text-white p-3 rounded-lg font-medium"
            >
              <User size={18} />
              Customer Portal
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
