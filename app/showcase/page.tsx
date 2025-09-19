"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBG from "@/components/AnimatedBG";
import ShowcaseSection from "@/components/ShowcaseSection";
import { motion } from "framer-motion";

export default function ShowcasePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative isolate flex-1 py-16 sm:py-24 overflow-hidden">
        <AnimatedBG />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-semibold tracking-tight"
            >
              Explore the Showcase
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-4 text-neutral-300"
            >
              Real examples of CrowmanCloud in action—from code insights to cloud automation.
            </motion.p>
          </div>

          <ShowcaseSection
            id="showcase-code"
            eyebrow="Code with confidence"
            title="From idea to production faster"
            description="CrowmanCloud pairs intuitive UI with powerful AI assistance. Generate scaffolds, optimize performance, and ship reliably."
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

          {/* Detailed highlights */}
          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-brand-300">Readiness checks</p>
                <h3 className="mt-2 text-lg font-semibold">Prevent issues before CI</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Detect secrets, unsafe env defaults, and missing health probes.</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Actionable fixes with code references.</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Track improvements over time.</span></li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-brand-300">Automation output</p>
                <h3 className="mt-2 text-lg font-semibold">Generated artifacts</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Dockerfile (multi‑stage) and docker‑compose.yml</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>GitHub Actions CI with caching</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Iac stubs for Terraform/Pulumi</span></li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-brand-300">Cost lens</p>
                <h3 className="mt-2 text-lg font-semibold">Estimate before you deploy</h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Region‑aware pricing for compute, storage, bandwidth.</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>What‑if sizing with monthly totals.</span></li>
                  <li className="flex gap-2"><span className="text-brand-300">•</span><span>Export estimates to JSON/CSV.</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Extra examples */}
          <ShowcaseSection
            id="showcase-automation"
            eyebrow="Automation"
            title="CI/CD and container setup in minutes"
            description="CrowmanCloud generates optimized Dockerfiles and CI pipelines tailored to your framework and package manager."
            image="/application.png"
          />
          <ShowcaseSection
            id="showcase-costs"
            eyebrow="Cost Estimation"
            title="See the bill before you deploy"
            description="Preview monthly spend by service and region. Quickly experiment with instance sizes to hit your budget."
            image="/application.png"
            reversed
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
