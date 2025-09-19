import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LogoMarquee from '@/components/LogoMarquee';
import ShowcaseSection from '@/components/ShowcaseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogoMarquee />
        <Features compact hideKeys={['security','multi-env']} />
        <ShowcaseSection
          id="showcase-code"
          eyebrow="Code with confidence"
          title="From idea to production faster"
          description="crowmancloud pairs intuitive UI with powerful AI assistance. Generate scaffolds, optimize performance, and ship reliably."
          image="/starting-app.png"
          reversed={false}
        />
        <ShowcaseSection
          id="showcase-cloud"
          eyebrow="Designed for the cloud"
          title="Scale effortlessly"
          description="Provision, monitor, and optimize with animated clarity. Built-in best practices keep your stack healthy."
          image="/application.png"
          reversed
        />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
