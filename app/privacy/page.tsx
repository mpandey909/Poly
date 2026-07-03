import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col pt-20">
      <Navbar />
      
      <div className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="mb-10 border-b border-slate-100 pb-8">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500 font-light">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>

          <div className="prose prose-slate prose-violet max-w-none">
            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Data Collection</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              We collect information that you provide directly to us when you register for an account, subscribe to our services, or communicate with us. This may include your name, email address, phone number, billing address, and payment information.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Usage of Information</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-5 text-slate-600 font-light leading-relaxed mb-6 space-y-2">
              <li>Provide, maintain, and improve our internet services.</li>
              <li>Process transactions and send related information.</li>
              <li>Send technical notices, updates, and support messages.</li>
              <li>Respond to your comments, questions, and customer service requests.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Protection</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. User Rights</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              You have the right to request access to the personal data we hold about you, request corrections to your personal data, or request deletion of your personal data under certain conditions.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Contact Information</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              If you have any questions or comments about this policy, you may email us at <a href="mailto:admin@polyinformatics.in" className="text-violet-600 hover:text-violet-700 underline">admin@polyinformatics.in</a> or by post to:
            </p>
            
            <address className="not-italic text-slate-600 font-light leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <strong className="block text-slate-900 font-semibold mb-2">Poly Informatics</strong>
              House No 26 F-Lane Milan Nagar,<br />
              Dibrugarh, Assam 78600
            </address>
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
