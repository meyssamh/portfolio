'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ResumeClient({
  lng,
  title,
  subtitle,
  downloadBtn,
  viewHtmlBtn,
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
          
          {/* 1. PDF Download Button */}
          <a
            href={`/resume-${lng}.pdf`}
            download={`Seyed_Meyssam_Hosseinifard_Resume_${lng}.pdf`}
            className="group inline-flex items-center gap-2 bg-[var(--accent-color)] text-white dark:text-zinc-900 px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <ArrowDownTrayIcon className="w-5 h-5 group-hover:animate-bounce" />
            {downloadBtn}
          </a>

          {/* 2. Interactive HTML View Button */}
          <a
            href={`/resume-${lng}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium border border-[var(--card-border)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300 bg-[var(--card-color)] backdrop-blur-sm"
          >
            {/* Code Bracket Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            {viewHtmlBtn || 'View Interactive HTML'}
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