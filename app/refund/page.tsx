import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Refund Policy</h1>
            <p className="text-slate-500 font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="prose prose-slate prose-violet max-w-none">
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Eligibility for Refund</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Refunds may be applicable under the following circumstances:
            </p>
            <ul className="list-disc pl-5 text-slate-600 font-light leading-relaxed mb-6 space-y-2">
              <li>Service unavailability for an extended period beyond acceptable SLAs.</li>
              <li>Double billing or overcharging due to a technical error.</li>
              <li>Cancellation of service before installation and setup has commenced.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Non-Refundable Items</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              The following charges are strictly non-refundable:
            </p>
            <ul className="list-disc pl-5 text-slate-600 font-light leading-relaxed mb-6 space-y-2">
              <li>One-time installation or activation fees once the service is live.</li>
              <li>Charges for router or modem equipment that has been unboxed or used.</li>
              <li>Service disruptions caused by user equipment, power failures, or acts of God.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Refund Process</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              To request a refund, please contact our support team at <a href="mailto:admin@polyinformatics.in" className="text-violet-600 hover:text-violet-700 underline">admin@polyinformatics.in</a> with your account details and reason for the request. Our billing team will review your case within 3-5 business days.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Refund Timelines</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Approved refunds will be processed and credited back to the original method of payment within 7-10 business days, depending on your bank or credit card issuer.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link href="/" className="inline-flex items-center text-violet-600 font-medium hover:text-violet-700 transition-colors">
              <span className="mr-2">&larr;</span> Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
