import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import LogoMarquee from '@/components/LogoMarquee';
import ShowcaseSection from '@/components/ShowcaseSection';
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
          description="Analyze your repo, auto‑provision cloud essentials, and get cost‑aware deployment guidance — all from a secure, local‑first app."
          image="/starting-app.png"
          details={[
            'Static analysis for frameworks, services, and dependencies',
            'Infra blueprints for AWS/GCP/Azure with best‑practice defaults',
            'Environment & secret suggestions without committing .env',
            'Cost estimates by region/SKU with tunable sizes',
            'Local‑first — your code stays on your machine'
          ]}
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
        {/* CTA removed per request */}
      </main>
      <Footer />
    </div>
  );
}
