'use client';

import { motion } from 'framer-motion';

export default function IntroClient({ greeting, name, introduction, location }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    show: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    // Increased min-height for more luxury breathing room
    <section className="min-h-[90vh] flex flex-col justify-center max-w-4xl mx-auto">
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
        {/* Small, elegant greeting with wide tracking */}
        <motion.p
          variants={item}
          className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400"
          style={{ color: 'var(--accent-color)' }}
        >
          {greeting}
        </motion.p>

        {/* Massive, bold Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
          style={{
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            color: 'var(--text-color)',
          }}
        >
          {name}
        </motion.h1>

        {/* Elegant Introduction */}
        <motion.p
          variants={item}
          className="text-xl md:text-3xl font-light text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed"
        >
          {introduction}
        </motion.p>

        {/* Location with a subtle divider line */}
        <motion.div variants={item} className="flex items-center gap-4 pt-8">
          <div className="h-[1px] w-12" style={{ backgroundColor: 'var(--accent-color)' }}></div>
          <p className="text-base md:text-lg font-normal text-zinc-500 dark:text-zinc-400 tracking-wide">
            {location}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
