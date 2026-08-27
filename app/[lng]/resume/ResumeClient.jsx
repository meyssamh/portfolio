'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDownTrayIcon, PrinterIcon } from '@heroicons/react/24/outline';

export default function ResumeClient({
  lng,
  title,
  subtitle,
  downloadBtn,
  printBtn,
  statStatusValue,
  statStatusLabel,
  statProjectsValue,
  statProjectsLabel,
  statYearsValue,
  statYearsLabel,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { label: statYearsLabel, value: statYearsValue },
    { label: statProjectsLabel, value: statProjectsValue },
    { label: statStatusLabel, value: statStatusValue },
  ];

  return (
    <div ref={ref} className="max-w-4xl mx-auto pb-20">
      {/* --- HERO SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--text-color)]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8">{subtitle}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`/resume-${lng}.pdf`}
            // target="_blank"
            // rel="noopener noreferrer"
            download="Seyed_Meyssam_Hosseinifard.pdf"
            className="group inline-flex items-center gap-2 bg-[var(--accent-color)] text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg cursor-pointer"
          >
            <ArrowDownTrayIcon className="w-5 h-5 group-hover:animate-bounce" />
            {downloadBtn}
          </a>
        </div>
      </motion.div>

      {/* --- AT A GLANCE STATS --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="card p-6 rounded-2xl text-center group hover:border-[var(--accent-color)] transition-colors duration-300"
          >
            <h3 className="text-3xl font-bold text-[var(--accent-color)] mb-1">{stat.value}</h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
