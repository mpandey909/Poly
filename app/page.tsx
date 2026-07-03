import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Plans } from '@/components/plans';
import { Business } from '@/components/business';
import { Features } from '@/components/features';
import { Coverage } from '@/components/coverage';
import { SpeedTest } from '@/components/speed-test';
import { Testimonials } from '@/components/testimonials';
import { FAQ } from '@/components/faq';
import { AppDownload } from '@/components/app-download';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Plans />
      <Business />
      <Features />
      <Coverage />
      <SpeedTest />
      <Testimonials />
      <FAQ />
      <AppDownload />
      <Contact />
      <Footer />
    </main>
  );
}
