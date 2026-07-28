import { AmbientGlow, Noise } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Filters } from '@/components/Filters';
import { Install } from '@/components/Install';
import { Extensions } from '@/components/Extensions';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientGlow />
      <Noise />
      <Navbar />
      <main>
        <Hero />
        <Filters />
        <Install />
        <Extensions />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
