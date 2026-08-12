'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function UsesClient({
  lng,
  title,
  subtitle,
  hardwareTitle,
  softwareTitle,
  workspaceTitle,
  hardware,
  software,
  workspace,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = [
    { title: hardwareTitle, items: hardware, delay: 0.2 },
    { title: softwareTitle, items: software, delay: 0.3 },
    { title: workspaceTitle, items: workspace, delay: 0.4 },
  ];

  return (
    <div ref={ref} className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-[var(--text-color)]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">{subtitle}</p>
      </motion.div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: category.delay }}
            className="card p-8 rounded-2xl flex flex-col h-full"
          >
            {/* Category Title */}
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-[var(--card-border)]">
              <div className="h-[2px] w-8" style={{ backgroundColor: 'var(--accent-color)' }}></div>
              <h2 className="text-xl font-bold text-[var(--accent-color)]">{category.title}</h2>
            </div>

            {/* Items List */}
            <ul className="space-y-6 flex-grow">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="group">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-[var(--text-color)] group-hover:text-[var(--accent-color)] transition-colors duration-300">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
