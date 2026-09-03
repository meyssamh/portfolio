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
  FaHeart,
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaCode, 
  FaSyncAlt, 
  FaPython,
  FaCloud,
} from 'react-icons/fa';
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux, 
} from 'react-icons/si';

export default function AboutClient({
  lng,
  aboutTitle,
  paragraph1,
  paragraph2,
  paragraph3,
  timelineTitle,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6, // ✅ Added for Internship 1
  item7, // ✅ Added for Internship 2
  skillsTitle,
  expertLevel,
  proficientLevel,
  familiarLevel,
  educationTitle,
  university,
  degree,
  years,
  certificationsTitle,
  certifications,
  languagesTitle,
  langPersian,
  langGerman,
  langEnglish,
  levelNative,
  levelProfessional,
  levelFluent,
  interestsTitle,
  interestsText,
  testimonialTitle,
  testimonialText,
  testimonialAuthor,
  testimonialRole,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // ✅ Combine all 7 timeline items dynamically (filters out any undefined items)
  const timelineItems = [item1, item2, item3, item4, item5, item6, item7].filter(Boolean);

  const iconMap = {
    React: FaReact,
    'Next.js': SiNextdotjs,
    'Node.js': FaNodeJs,
    JavaScript: FaJs,
    'REST APIs': FaServer,
    Redux: SiRedux,
    HTML5: FaHtml5,
    'CSS3/SCSS': FaCss3Alt,
    'Clean Code': FaCode,
    Scrum: FaSyncAlt,
    
    TypeScript: SiTypescript,
    'Vue.js': FaVuejs,
    Git: FaGitAlt,
    Java: FaJava,
    Figma: FaFigma,
    'CI/CD': FaCogs,
    'Tailwind CSS': SiTailwindcss,
    
    Python: FaPython,
    Docker: FaDocker,
    Azure: FaCloud,
    Linux: FaLinux,
  };

  const certsArray = Array.isArray(certifications) ? certifications : [];

  const skillGroups = [
    { title: expertLevel, skills: ['React', 'Next.js', 'Node.js', 'JavaScript', 'REST APIs', 'Redux', 'HTML5', 'CSS3/SCSS', 'Clean Code', 'Scrum'] },
    {
      title: proficientLevel,
      skills: ['TypeScript', 'Vue.js', 'Git', 'Java', 'Figma', 'CI/CD', 'Tailwind CSS'],
    },
    { title: familiarLevel, skills: ['Python', 'Docker', 'Azure', 'Linux'] },
  ];

  const languagesData = [
    { name: langPersian, level: levelNative, dots: 5 },
    { name: langGerman, level: levelFluent, dots: 4 },
    { name: langEnglish, level: levelProfessional, dots: 4 },
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
        {(() => {
          const isRTL = lng === 'fa';
          return (
            <div className="relative space-y-8 md:space-y-12">
              <div className={`absolute top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent-color)] via-[var(--card-border)] to-transparent ${isRTL ? 'right-6 md:right-8' : 'left-6 md:left-8'}`} />
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`relative ${isRTL ? 'pr-16 md:pr-20' : 'pl-16 md:pl-20'}`}
                >
                  <div className={`absolute w-3 h-3 rounded-full bg-[var(--accent-color)] ring-4 ring-[var(--background-color)] dark:ring-[var(--background-color)] shadow-lg ${isRTL ? 'right-[18px] md:right-[26px]' : 'left-[18px] md:left-[26px]'} top-[30px] md:top-[38px]`} />
                  <div className="card p-6 md:p-8 rounded-2xl group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase" style={{ backgroundColor: 'var(--accent-color)', color: 'white', boxShadow: '0 2px 8px rgba(197, 164, 126, 0.3)' }}>
                        {item.year}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[var(--card-border)] to-transparent" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold text-[var(--text-color)] mb-2 group-hover:text-[var(--accent-color)] transition-colors duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <FaBuilding className="w-4 h-4 text-[var(--accent-color)] opacity-70 flex-shrink-0" />
                      <p className="text-sm font-medium text-[var(--accent-color)]">{item.company}</p>
                    </div>
                    <p className={`text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          );
        })()}
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
              className="h-full"
            >
              <div className="card p-6 rounded-2xl flex flex-col group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl h-full">
                <h3 className="text-lg font-bold mb-6 text-[var(--accent-color)] border-b border-[var(--card-border)] pb-3">
                  {group.title}
                </h3>
                {/* ✅ Grid layout with content-start as requested */}
                <div className="grid grid-cols-3 gap-4 justify-items-center content-start flex-1">
                  {group.skills.map((skill, skillIndex) => {
                    const IconComponent = iconMap[skill] || FaServer;
                    return (
                      <div key={skillIndex} className="group/skill relative flex flex-col items-center gap-3 cursor-default">
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-md opacity-0 group-hover/skill:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-30 shadow-lg">
                          {skill}
                        </span>
                        <div className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-transparent group-hover/skill:border-[var(--accent-color)] group-hover/skill:bg-[var(--accent-color)]/10 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-zinc-400 dark:text-zinc-500 group-hover/skill:text-[var(--accent-color)] group-hover/skill:drop-shadow-[0_0_8px_rgba(197,164,126,0.6)] transition-all duration-300 transform group-hover/skill:scale-110" />
                        </div>
                      </div>
                    );
                  })}
                </div>
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
          <div className="card p-6 rounded-2xl flex items-start gap-4 group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl">
            <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-color)]/10 transition-all duration-300">
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
          <div className="card p-6 rounded-2xl space-y-4 group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl">
            {languagesData.map((lang, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="font-medium text-[var(--text-color)]">{lang.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{lang.level}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i < lang.dots ? 'bg-[var(--accent-color)]' : 'bg-zinc-300 dark:bg-zinc-700'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 5. CERTIFICATIONS */}
      {certsArray.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-24"
        >
          <SectionHeader title={certificationsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certsArray.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="h-full"
              >
                <div className="card p-4 rounded-xl flex items-center gap-4 group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl h-full">
                  <div className="w-12 h-12 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 flex items-center justify-center text-[var(--accent-color)] group-hover:bg-[var(--accent-color)]/10 transition-all duration-300 flex-shrink-0">
                    <FaAward className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[var(--text-color)] truncate group-hover:text-[var(--accent-color)] transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* 6. INTERESTS & VOLUNTEERING */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-12"
      >
        <SectionHeader title={interestsTitle} />
        <div className="card p-8 md:p-10 rounded-2xl relative group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--accent-color)]/10 transition-all duration-300">
            <FaHeart className="w-6 h-6 text-zinc-400 dark:text-zinc-500 group-hover:text-[var(--accent-color)] transition-all duration-300" />
          </div>
          <div className="flex-1">
            <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-700 dark:text-zinc-300">
              {interestsText}
            </p>
          </div>
        </div>
      </motion.div>

      {/* 7. TESTIMONIAL */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mb-12"
      >
        <SectionHeader title={testimonialTitle} />
        <div className="card p-8 md:p-10 rounded-2xl relative group hover:border-[var(--accent-color)] transition-all duration-300 hover:shadow-xl">
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