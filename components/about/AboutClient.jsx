'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutClient({ aboutTitle, paragraphs, lng }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="about" className="my-32 px-4 max-w-5xl mx-auto" ref={ref}>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-12"
      >
        <div
          className="h-[1px] w-8 md:w-12"
          style={{ backgroundColor: 'var(--accent-color)' }}
        ></div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{aboutTitle}</h2>
      </motion.div>

      {/* Paragraphs with Line-by-Line Reveal */}
      <div className="space-y-8">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3 + index * 0.2,
            }}
            className="text-lg md:text-xl font-light leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
