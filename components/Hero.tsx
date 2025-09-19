"use client";
import { motion } from 'framer-motion';
import AnimatedBG from './AnimatedBG';
import ShowcaseGlow from './ShowcaseGlow';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate pt-16 sm:pt-24 pb-16 sm:pb-24 overflow-hidden">
      <AnimatedBG />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Now in preview — crowmancloud
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight"
          >
            Deploy to the Cloud with Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-lg text-neutral-300"
          >
            CrowmanCloud is the essential pre-deployment platform for developers. Analyze your source code, automate infrastructure setup, get intelligent cloud recommendations, and estimate costs—all from a secure, local-first desktop application.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-10 flex items-center justify-center gap-3"
          >
            <Link href="#" className="rounded-md bg-brand-500 hover:bg-brand-400 px-5 py-3 font-medium text-white transition">Get started</Link>
            <Link href="#features" className="rounded-md bg-white/10 hover:bg-white/20 px-5 py-3 font-medium transition">Explore features</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative mt-14 rounded-xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 overflow-visible"
          >
            <ShowcaseGlow />
            <img src="/application.png" alt="Application preview" className="w-full rounded-lg relative z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
