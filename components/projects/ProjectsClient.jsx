'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightWrapper from '../spotlightWrapper/SpotlightWrapper'; // Adjust path if needed

export default function ProjectsClient({ projectsTitle, projectData, hintText, lng }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id='projects' className='my-32 px-4 max-w-7xl mx-auto' ref={ref}>
            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className='flex items-center gap-4 mb-16'
            >
                <div className='h-[1px] w-8 md:w-12' style={{ backgroundColor: 'var(--accent-color)' }}></div>
                <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
                    {projectsTitle}
                </h2>
            </motion.div>

            {/* Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                            duration: 0.7, 
                            ease: [0.22, 1, 0.36, 1],
                            delay: index * 0.15
                        }}
                    >
                        <SpotlightWrapper className='card p-8 h-full flex flex-col justify-between group'>
                            <div>
                                <h3 className='text-xl md:text-2xl font-bold mb-4 tracking-tight group-hover:text-[var(--accent-color)] transition-colors duration-300'>
                                    {project.title} {/* Pre-translated! */}
                                </h3>
                                
                                <p className='font-light leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6'>
                                    {project.description} {/* Pre-translated! */}
                                </p>

                                {project.caution && (
                                    <motion.p 
                                        className='text-sm font-medium mb-4'
                                        style={{ color: 'var(--accent-color)' }}
                                    >
                                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4 inline mr-2'>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' />
                                        </svg>
                                        {project.caution} {/* Pre-translated! */}
                                    </motion.p>
                                )}
                            </div>

                            <div className='flex flex-wrap gap-3 mt-4'>
                                {project.website && (
                                    <a href={project.website} className='px-5 py-2 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300'>
                                        {project.websiteText}
                                    </a>
                                )}
                                {project.sourcecode.available && project.sourcecode.frontend && (
                                    <a href={project.sourcecode.frontend} className='px-5 py-2 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300'>
                                        {project.frontendText}
                                    </a>
                                )}
                                {project.sourcecode.available && project.sourcecode.backend && (
                                    <a href={project.sourcecode.backend} className='px-5 py-2 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300'>
                                        {project.backendText}
                                    </a>
                                )}
                                {project.sourcecode.available && project.sourcecode.source && (
                                    <a href={project.sourcecode.source} className='px-5 py-2 text-sm font-medium rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300'>
                                        {project.sourceText}
                                    </a>
                                )}
                            </div>
                        </SpotlightWrapper>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-sm font-medium mt-12 text-center'
                style={{ color: 'var(--accent-color)' }}
            >
                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-5 h-5 inline mr-2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z' />
                </svg>
                {hintText}
            </motion.p>
        </section>
    );
}