'use client';

// Translations for the footer signature
const translations = {
  en: {
    signature: 'Designed & Built by Seyed Meyssam Hosseinifard',
    poweredBy: 'Powered by',
  },
  de: {
    signature: 'Entworfen & Entwickelt von Seyed Meyssam Hosseinifard',
    poweredBy: 'Entwickelt mit',
  },
  fa: {
    signature: 'طراحی و توسعه توسط سید میثم حسینی‌فرد',
    poweredBy: 'ساخته شده با',
  },
};

const technologies = ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'i18next'];

export default function BuiltWith({ lng }) {
  // Get the correct translations based on the language, fallback to English
  const t = translations[lng] || translations.en;

  return (
    <div className="w-full py-8 border-t border-zinc-200 dark:border-zinc-800 mt-12">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        {/* Your Signature */}
        <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{t.signature}</p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {/* 1. The "Powered by" text (Follows natural RTL/LTR direction) */}
          {/* We use 'me-2' (margin-end) so it automatically spaces correctly in both languages */}
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 me-2">
            {t.poweredBy}
          </span>

          {/* 2. The Tech Chips (Strictly locked to LTR so English words don't flip) */}
          <div className="flex flex-wrap items-center gap-2" dir="ltr">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-transparent hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
