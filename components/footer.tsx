import { Wifi, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white">
                <Wifi size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight text-white leading-none">
                  Poly Informatics
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest mt-1 text-violet-400">
                  Stay connected
                </span>
              </div>
            </Link>
            <p className="font-light leading-relaxed mb-6">
              Empowering India with lightning-fast, ultra-reliable fiber internet. Connecting homes, businesses, and communities to the digital future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-violet-600 hover:text-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-violet-400 hover:text-white transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-violet-700 hover:text-white transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 md:text-right">
            <div className="md:min-w-[150px]">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm md:text-right">Mobile App</h4>
              <p className="text-sm font-light mb-4 md:text-right text-slate-400">Download the MyBroadband app to manage your account.</p>
              <a 
                href="https://play.google.com/store/search?q=MyBroadband&c=apps" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12 w-auto md:ml-auto"
                />
              </a>
            </div>
            <div className="md:min-w-[150px]">
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-3 font-light text-sm flex flex-col md:items-end">
                <li><Link href="/privacy" className="hover:text-fuchsia-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-fuchsia-400 transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/refund" className="hover:text-fuchsia-400 transition-colors">Refund Policy</Link></li>
                <li><a href="#" className="hover:text-fuchsia-400 transition-colors">SLA Agreement</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Poly Informatics Broadband. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500" /> All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
