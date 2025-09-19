"use client";
import { motion } from 'framer-motion';
import ShowcaseGlow from './ShowcaseGlow';

export default function ShowcaseSection({ id, eyebrow, title, description, image, reversed = false }: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  reversed?: boolean;
}) {
  return (
    <section id={id} className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-brand-300">{eyebrow}</p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h3>
            <p className="mt-3 text-neutral-300">{description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative rounded-xl border border-white/10 bg-white/5 p-4 overflow-visible"
          >
            <ShowcaseGlow />
            <img src={image} alt="showcase" className="w-full h-auto rounded-lg relative z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
