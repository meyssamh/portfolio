'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress({ lng }) {
  // 1. Track the scroll progress of the entire document (0 to 1)
  const { scrollYProgress } = useScroll();

  // 2. Apply a spring physics to make the movement buttery smooth
  // This prevents the "jittery" look of standard scroll listeners
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 3. Determine the starting side based on language (RTL vs LTR)
  const originClass = lng === 'fa' ? 'origin-right' : 'origin-left';

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent-color)] z-[100] pointer-events-none ${originClass}`}
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
