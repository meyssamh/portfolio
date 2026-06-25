'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Socials from '../socials/Socials';

export default function ContactClient({ contactTitle, workText, togetherText, lng }) {
  const ref = useRef(null);

  // Trigger animation when the section scrolls into view
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='contact' className='my-32 py-20 px-4 max-w-6xl mx-auto' ref={ref}>

      {/* Small, elegant label at the top */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className='text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-8'
        style={{ color: 'var(--accent-color)' }}
      >
        {contactTitle}
      </motion.p>

      {/* Line 1: "Let's build" - Massive, Bold, Solid */}
      <div className='overflow-hidden w-full'>
        <motion.h2
          initial={{ y: "110%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          // Changed to text-[2.6rem] for the perfect mobile size
          className='text-[2.6rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] sm:leading-[0.9] text-[var(--text-color)] w-full break-words'
        >
          {workText}
        </motion.h2>
      </div>

      {/* Line 2: "something exceptional." - Italic, Lighter, Accent Color */}
      <div className='overflow-hidden w-full mt-2 md:mt-4'>
        <motion.h2
          initial={{ y: "110%" }}
          animate={isInView ? { y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          // Changed to text-[2.6rem] for the perfect mobile size
          className='text-[2.6rem] sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1.1] sm:leading-[0.9] w-full break-words'
        >
          <span className='italic font-light' style={{ color: 'var(--accent-color)' }}>
            {togetherText}
          </span>
        </motion.h2>
      </div>

      {/* Social Links fade in at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='mt-16 md:mt-24'
      >
        <Socials lng={lng} />
      </motion.div>
    </section>
  );
}