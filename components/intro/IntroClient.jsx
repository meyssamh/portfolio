'use client';

import { motion } from 'framer-motion';

export default function IntroClient({ greeting, name, introduction, location }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id='intro' className='min-h-[80vh] flex flex-col justify-center py-20'>
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'
      >
        <motion.span variants={item} className='block text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl font-normal mb-4'>
          {greeting}
        </motion.span>

        <motion.span variants={item} className='block mb-2'>
          {name}
        </motion.span>

        <motion.span variants={item} className='block bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent mb-2'>
          {introduction}
        </motion.span>

        <motion.span variants={item} className='block text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl font-normal mt-4'>
          {location}
        </motion.span>
      </motion.h1>
    </section>
  );
}