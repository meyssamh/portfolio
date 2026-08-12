'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaLinux,
  FaServer,
  FaCogs,
  FaAward,
  FaBuilding,
  FaGraduationCap,
} from 'react-icons/fa';
import { SiNextdotjs, SiSpring, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';

export default function AboutClient({
  lng,
  aboutTitle,
  paragraph1,
  paragraph2,
  paragraph3,
  timelineTitle,
  item1,
  item2,
  skillsTitle,
  expertLevel,
  proficientLevel,
  familiarLevel,
  educationTitle,
  university,
  degree,
  years,
  certificationsTitle,
  languagesTitle,
  testimonialTitle,
  testimonialText,
  testimonialAuthor,
  testimonialRole,
  langPersian,
  langGerman,
  langEnglish,
  levelNative,
  levelC1,
  levelProfessional,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timelineItems = [item1, item2];

  const iconMap = {
    React: FaReact,
    'Next.js': SiNextdotjs,
    TypeScript: SiTypescript,
    'Vue.js': FaVuejs,
    'Tailwind CSS': SiTailwindcss,
    Java: FaJava,
    'Spring Boot': SiSpring,
    'Node.js': FaNodeJs,
    PostgreSQL: SiPostgresql,
    Git: FaGitAlt,
    Docker: FaDocker,
    Figma: FaFigma,
    Linux: FaLinux,
    'REST APIs': FaServer,
    'CI/CD': FaCogs,
  };

  const skillGroups = [
    { title: expertLevel, skills: ['React', 'Next.js', 'Java', 'Spring Boot', 'TypeScript'] },
    {
      title: proficientLevel,
      skills: ['Vue.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
    },
    { title: familiarLevel, skills: ['Git', 'Figma', 'Linux', 'REST APIs', 'CI/CD'] },
  ];

  const languagesData = [
    { name: langPersian, level: levelNative, dots: 5 },
    { name: langGerman, level: levelC1, dots: 4 },
    { name: langEnglish, level: levelProfessional, dots: 4 },
  ];

  const certificationsData = [
    { title: 'AWS Certified Cloud Practitioner', year: '2023' },
    { title: 'Oracle Certified Java Programmer', year: '2022' },
    { title: 'Meta Front-End Developer', year: '2023' },
    { title: 'University Honor Roll', year: '2019' },
  ];

  return (
    <div ref={ref} className="max-w-4xl mx-auto pb-20">
      {/* 1. ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <SectionHeader title={aboutTitle} />
        <div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-300">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
          <p>{paragraph3}</p>
        </div>
      </motion.div>

      {/* 2. TIMELINE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-24"
      >
        <SectionHeader title={timelineTitle} />
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ backgroundColor: 'var(--card-border)' }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ backgroundColor: 'var(--accent-color)' }}
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
            />
          </div>
          <div className="space-y-12 md:space-y-24">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 + index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}
                  >
                    <div className="card p-6 md:p-8 rounded-2xl relative group hover:border-[var(--accent-color)] transition-colors duration-300">
                      <span
                        className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full mb-3"
                        style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 text-[var(--text-color)]">
                        {item.role}
                      </h3>
                      <p
                        className="text-sm font-medium mb-3"
                        style={{ color: 'var(--accent-color)' }}
                      >
                        {item.company}
                      </p>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Logo Badge for Timeline */}
                  <div className="absolute left-4 md:left-1/2 w-14 h-14 -translate-x-1/2 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 z-10 border-4 border-[var(--background-color)] group-hover:bg-[var(--accent-color)]/10 transition-colors duration-300">
                    <FaBuilding className="w-6 h-6 text-zinc-400 dark:text-zinc-500 filter grayscale opacity-70 group-hover:text-[var(--accent-color)] group-hover:filter-none group-hover:opacity-100 transition-all duration-300" />
                  </div>

                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* 3. TECH STACK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-24"
      >
        <SectionHeader title={skillsTitle} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + groupIndex * 0.1 }}
              className="card p-6 rounded-2xl flex flex-col"
            >
              <h3 className="text-lg font-bold mb-6 text-[var(--accent-color)] border-b border-[var(--card-border)] pb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start flex-1">
                {group.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill] || FaServer;
                  return (
                    <div
                      key={skillIndex}
                      className="group relative flex flex-col items-center gap-3 cursor-default"
                    >
                      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-30 shadow-lg">
                        {skill}
                      </span>
                      <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-transparent group-hover:border-[var(--accent-color)] group-hover:bg-[var(--accent-color)]/10 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-zinc-400 dark:text-zinc-500 group-hover:text-[var(--accent-color)] group-hover:drop-shadow-[0_0_8px_rgba(197,164,126,0.6)] transition-all duration-300 transform group-hover:scale-110" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 4. EDUCATION & LANGUAGES */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
      >
        <div>
          <SectionHeader title={educationTitle} />
          <div className="card p-6 rounded-2xl flex items-start gap-4 group hover:border-[var(--accent-color)] transition-colors duration-300">
            {/* Logo Badge for Education */}
            <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-color)]/10 transition-colors duration-300">
              <FaGraduationCap className="w-6 h-6 text-zinc-400 dark:text-zinc-500 filter grayscale opacity-70 group-hover:text-[var(--accent-color)] group-hover:filter-none group-hover:opacity-100 transition-all duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[var(--text-color)] mb-1 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                {university}
              </h3>
              <p className="text-sm font-medium text-[var(--accent-color)] mb-2">{degree}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{years}</p>
            </div>
          </div>
        </div>
        <div>
          <SectionHeader title={languagesTitle} />
          <div className="card p-6 rounded-2xl space-y-4">
            {languagesData.map((lang, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-[var(--text-color)]">{lang.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{lang.level}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i < lang.dots ? 'bg-[var(--accent-color)]' : 'bg-zinc-300 dark:bg-zinc-700'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 4.5. CERTIFICATIONS & LEARNING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mb-24"
      >
        <SectionHeader title={certificationsTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
              className="card p-4 rounded-xl flex items-center gap-4 group hover:border-[var(--accent-color)] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-[var(--accent-color)] group-hover:bg-[var(--accent-color)]/10 transition-colors duration-300 flex-shrink-0">
                <FaAward className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[var(--text-color)] truncate group-hover:text-[var(--accent-color)] transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 5. TESTIMONIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12"
      >
        <SectionHeader title={testimonialTitle} />
        <div className="card p-8 md:p-10 rounded-2xl relative">
          <span className="absolute top-6 left-6 text-6xl text-[var(--accent-color)] opacity-30 font-serif">
            “
          </span>
          <p className="text-lg md:text-xl font-light italic leading-relaxed text-zinc-700 dark:text-zinc-300 mb-6 relative z-10 pt-4">
            {testimonialText}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] flex items-center justify-center text-white font-bold">
              {testimonialAuthor.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-[var(--text-color)]">{testimonialAuthor}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{testimonialRole}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper component for consistent section headers
function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[2px] w-8 md:w-12" style={{ backgroundColor: 'var(--accent-color)' }}></div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-color)]">
        {title}
      </h2>
    </div>
  );
}
