'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  GlobeAltIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';

export default function Projects({
  projectsTitle,
  caseStudyText,
  boxTitle,
  boxDescription,
  boxCaution,
  classroomTitle,
  classroomDescription,
  siliconTitle,
  siliconDescription,
  springClassroomTitle,
  springClassroomDescription,
  website,
  frontend,
  backend,
  source,
  hint,
  lng,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const isRTL = lng === 'fa';
  const ArrowIcon = isRTL ? ArrowLeftIcon : ArrowRightIcon;

  const projects = [
    {
      slug: 'box-pwa',
      hasCaseStudy: true,
      title: boxTitle,
      description: boxDescription,
      caution: boxCaution,
      liveUrl: 'https://box-pwa.example.com',
      githubFrontend: 'https://github.com/yourusername/box-pwa',
      githubBackend: null,
      tags: ['Vue.js', 'PWA', 'Offline-First'],
    },
    {
      slug: 'classroom-system',
      hasCaseStudy: true,
      title: classroomTitle,
      description: classroomDescription,
      caution: null,
      liveUrl: 'https://classroom.example.com',
      githubFrontend: 'https://github.com/yourusername/classroom-nextjs',
      githubBackend: 'https://github.com/yourusername/classroom-spring',
      tags: ['Next.js', 'Spring Boot', 'PostgreSQL'],
    },
    {
      slug: 'silicon-box',
      hasCaseStudy: false,
      title: siliconTitle,
      description: siliconDescription,
      caution: null,
      liveUrl: 'https://siliconbox.example.com',
      githubFrontend: 'https://github.com/yourusername/silicon-box',
      githubBackend: null,
      tags: ['Next.js', 'TypeScript', 'E-Commerce'],
    },
    {
      slug: 'spring-classroom',
      hasCaseStudy: false,
      title: springClassroomTitle,
      description: springClassroomDescription,
      caution: null,
      liveUrl: null,
      githubFrontend: null,
      githubBackend: 'https://github.com/yourusername/spring-classroom-api',
      tags: ['Spring Boot', 'Java', 'REST API', 'JWT'],
    },
  ];

  return (
    <section id="projects" className="max-w-4xl mx-auto" ref={ref}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        {/* The Signature Bronze Line */}
        <div
          className="h-[2px] w-8 md:w-12"
          style={{ backgroundColor: 'var(--accent-color)' }}
        ></div>

        {/* The Bold Title */}
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[var(--text-color)]">
          {projectsTitle}
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="group relative"
          >
            {/* Main Card */}
            <div className="card p-8 rounded-2xl h-full flex flex-col hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-2xl">
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Caution Note */}
              {project.caution && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                  <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
                    {project.caution}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                {/* 1. Source Code / Live Links (Secondary Actions) */}
                <div className="flex flex-wrap items-center gap-3">
                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors duration-300"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      {frontend}
                    </a>
                  )}

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors duration-300"
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      {backend}
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)] transition-colors duration-300"
                    >
                      <GlobeAltIcon className="w-4 h-4" />
                      {website}
                    </a>
                  )}
                </div>

                {/* 2. Case Study Button - Premium Filled Style */}
                {project.hasCaseStudy && (
                  <div className={`${isRTL ? 'text-left' : 'text-right'}`}>
                    <Link
                      href={`/${lng}/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white dark:text-zinc-900 transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        backgroundColor: 'var(--accent-color)',
                        boxShadow: '0 4px 12px rgba(197, 164, 126, 0.3)',
                      }}
                    >
                      {caseStudyText}
                      <ArrowIcon className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coming Soon Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-16 text-center"
      >
        <p className="text-[var(--accent-color)] italic">{hint}</p>
      </motion.div>
    </section>
  );
}
