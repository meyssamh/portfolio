'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CodeBracketIcon,
} from '@heroicons/react/24/outline';

export default function CaseStudyClient({ lng, slug, project, content }) {
  const isRTL = lng === 'fa';
  const ArrowIcon = isRTL ? ArrowRightIcon : ArrowLeftIcon;

  const codeSnippets = {
    box: `// Service Worker for Offline Functionality\nself.addEventListener('fetch', (event) => {\n  event.respondWith(\n    caches.match(event.request).then((response) => {\n      return response || fetch(event.request).then((fetchResponse) => {\n        return caches.open('pwa-cache').then((cache) => {\n          cache.put(event.request, fetchResponse.clone());\n          return fetchResponse;\n        });\n      });\n    }).catch(() => {\n      return caches.match('/offline.html');\n    })\n  );\n});`,
    classroom: `// JWT Authentication Middleware\n@Component\npublic class JwtAuthenticationFilter extends OncePerRequestFilter {\n    @Override\n    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {\n        String token = extractTokenFromRequest(request);\n        if (token != null && JwtUtil.validateToken(token)) {\n            // Authentication logic here\n        }\n        filterChain.doFilter(request, response);\n    }\n}`,
  };

  const technologies = {
    box: ['Vue.js', 'Vuex', 'Vuetify', 'PWA', 'Service Workers', 'IndexedDB', 'Firebase'],
    classroom: [
      'Next.js',
      'TypeScript',
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'JWT',
      'OpenSSL',
      'REST API',
    ],
  };

  const data = content[project.type];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link
          href={`/${lng}/projects`}
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[var(--accent-color)] transition-colors duration-300"
        >
          <ArrowIcon className="w-4 h-4" /> {content.backToProjects}
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--text-color)]">
          {data.title}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">{data.subtitle}</p>
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-color)] text-white dark:text-zinc-900 px-6 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300"
            >
              <GlobeAltIcon className="w-5 h-5" /> {content.liveDemo}
            </a>
          )}
          {project.githubFrontend && (
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-zinc-300 dark:border-zinc-700 text-[var(--text-color)] px-6 py-3 rounded-full font-medium hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
            >
              <CodeBracketIcon className="w-5 h-5" /> {content.viewCode}
            </a>
          )}
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-20"
      >
        <SectionHeader title={content.overview} />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--accent-color)] mb-4">
              {content.challenge}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.challenge}</p>
          </div>
          <div className="card p-8 rounded-2xl">
            <h3 className="text-lg font-bold text-[var(--accent-color)] mb-4">
              {content.solution}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{data.solution}</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-20"
      >
        <SectionHeader title={content.architecture} />
        <div className="card p-8 rounded-2xl">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 font-medium">
            {data.architecture}
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-20"
      >
        <SectionHeader title={content.metrics} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="card p-6 rounded-2xl text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[var(--accent-color)] mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mb-20"
      >
        <SectionHeader title={content.technologies} />
        <div className="flex flex-wrap gap-3">
          {technologies[project.type].map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium border border-transparent hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-20"
      >
        <SectionHeader title={content.codeSnippet} />
        <div className="card p-8 rounded-2xl">
          <h3 className="text-lg font-bold text-[var(--text-color)] mb-3">{data.codeTitle}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">{data.codeDescription}</p>
          <div className="bg-zinc-900 dark:bg-black rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
              <code>{codeSnippets[project.type]}</code>
            </pre>
          </div>
        </div>
      </motion.section>
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
