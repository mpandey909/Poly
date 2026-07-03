'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${formData.firstName} ${formData.lastName}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:admin@polyinformatics.in?subject=Website Contact Form&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-violet-600 uppercase mb-3">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">We&apos;re Here to Help</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-colors">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Call Us</h4>
                <p className="text-slate-600 mb-2">Mon-Sat from 8am to 8pm.</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+919864662171" className="text-lg font-medium text-violet-600 hover:underline">+91 98646 62171</a>
                  <a href="tel:+919864299685" className="text-lg font-medium text-violet-600 hover:underline">+91 98642 99685</a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">WhatsApp</h4>
                <p className="text-slate-600 mb-2">Instant support and billing updates.</p>
                <a href="https://wa.me/919864662171" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Email Us</h4>
                <p className="text-slate-600 mb-2">Drop us a line anytime.</p>
                <a href="mailto:admin@polyinformatics.in" className="text-lg font-medium text-violet-600 hover:underline">admin@polyinformatics.in</a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Head Office</h4>
                <p className="text-slate-600">
                  House No 26 F lane Milan nagar<br />
                  Dibrugarh, Assam 786001
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Branch Office</h4>
                <p className="text-slate-600">
                  Tapan Nagar Ward No 6<br />
                  Golaghat, Assam 785621
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
