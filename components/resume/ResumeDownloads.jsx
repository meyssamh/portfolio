'use client';

import { motion } from 'framer-motion';
import { EyeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const translations = {
  en: {
    title: 'Download Resume',
    subtitle:
      'Choose your preferred language to view or download the interactive HTML resume. You can easily print it to PDF from your browser.',
    view: 'View',
    download: 'Download',
    languages: {
      en: 'English',
      de: 'German',
      fa: 'Persian',
    },
  },
  de: {
    title: 'Lebenslauf herunterladen',
    subtitle:
      'Wählen Sie Ihre bevorzugte Sprache, um den interaktiven HTML-Lebenslauf anzuzeigen oder herunterzuladen. Sie können ihn direkt aus dem Browser als PDF drucken.',
    view: 'Ansehen',
    download: 'Herunterladen',
    languages: {
      en: 'Englisch',
      de: 'Deutsch',
      fa: 'Persisch',
    },
  },
  fa: {
    title: 'دانلود رزومه',
    subtitle:
      'زبان مورد نظر خود را برای مشاهده یا دانلود رزومه تعاملی HTML انتخاب کنید. می‌توانید به راحتی آن را از مرورگر خود به صورت PDF چاپ کنید.',
    view: 'مشاهده',
    download: 'دانلود',
    languages: {
      en: 'انگلیسی',
      de: 'آلمانی',
      fa: 'فارسی',
    },
  },
};

// The files are in the root of the public folder
const resumeFiles = [
  { code: 'en', flag: '🇬🇧' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'fa', flag: '🇮' },
];

export default function ResumeDownloads({ lng }) {
  const t = translations[lng] || translations.en;
  const isRTL = lng === 'fa';

  return (
    <div className="w-full max-w-4xl mx-auto mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4 tracking-tight">
          {t.title}
        </h2>
        <p className="text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resumeFiles.map((file, index) => (
          <motion.div
            key={file.code}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // dir="ltr" ensures the flags and English file names don't flip awkwardly in Persian
            className="card p-6 flex flex-col items-center text-center gap-5"
            dir="ltr"
          >
            {/* Flag and Language Name */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{file.flag}</span>
              <h3 className="text-xl font-semibold text-[var(--text-color)]">
                {t.languages[file.code]}
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full gap-3">
              {/* View Button (Opens in new tab) */}
              <a
                href={`/resume-${file.code}.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[var(--accent-color)] text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-all duration-300"
              >
                <EyeIcon className="w-4 h-4" />
                {t.view}
              </a>

              {/* Download Button (Forces download) */}
              <a
                href={`/resume-${file.code}.html`}
                download={`Resume_${file.code}.html`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[var(--card-border)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
              >
                <ArrowDownTrayIcon className="w-4 h-4" />
                {t.download}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
