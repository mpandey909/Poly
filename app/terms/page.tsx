import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-slate-500 font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="prose prose-slate prose-violet max-w-none">
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Service Terms</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              By subscribing to our internet services, you agree to comply with our Acceptable Use Policy. Poly Informatics reserves the right to modify service speeds and data caps in accordance with the regulatory norms and fair usage policies.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. User Responsibilities</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              You are responsible for securing your local network and Wi-Fi credentials.
            </p>
            <ul className="list-disc pl-5 text-slate-600 font-light leading-relaxed mb-6 space-y-2">
              <li>The service must not be used for any illegal activities, copyright infringement, or spamming.</li>
              <li>Prompt payment of monthly invoices is required to avoid service suspension.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Limitations of Liability</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Poly Informatics shall not be held liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. We do not guarantee uninterrupted service and are not responsible for data loss or hardware damage.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Dispute Resolution</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Any disputes arising from these terms will be governed by the laws of India. Both parties agree to attempt to resolve any dispute through amicable negotiation before resorting to formal legal proceedings within the jurisdiction of Dibrugarh, Assam.
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
