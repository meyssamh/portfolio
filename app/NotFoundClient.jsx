'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Translations dictionary
const translations = {
  en: {
    code: '404',
    title: 'Page Not Found',
    message: 'Oops! The page you are looking for seems to have wandered off into the digital void.',
    homeButton: 'Back to Home',
    contactButton: 'Contact Me',
  },
  de: {
    code: '404',
    title: 'Seite nicht gefunden',
    message:
      'Hoppla! Die Seite, die Sie suchen, scheint sich in das digitale Nichts verlaufen zu haben.',
    homeButton: 'Zurück zur Startseite',
    contactButton: 'Kontaktieren Sie mich',
  },
  fa: {
    code: '۴۰۴',
    title: 'صفحه یافت نشد',
    message: 'اوه! به نظر می‌رسد صفحه‌ای که به دنبال آن هستید در اعماق دنیای دیجیتال گم شده است.',
    homeButton: 'بازگشت به صفحه اصلی',
    contactButton: 'تماس با من',
  },
};

export default function NotFoundClient() {
  // 1. Get the current URL path (e.g., "/fa/xyz-abc-123")
  const pathname = usePathname();

  // 2. Extract the language from the first segment of the URL
  // If the URL is just "/xyz", it defaults to 'en'
  const lng = pathname.split('/')[1] || 'en';

  const isRTL = lng === 'fa';
  const ArrowIcon = isRTL ? ArrowLeftIcon : ArrowRightIcon;
  const t = translations[lng] || translations.en;

  return (
    // 3. Apply dir="rtl" dynamically for Persian users
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{ fontFamily: isRTL ? "'IRANSans', sans-serif" : "'Poppins', sans-serif" }}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-color)]/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10 max-w-2xl"
      >
        {/* Animated 404 Code */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-9xl md:text-[12rem] font-bold text-[var(--accent-color)] opacity-20 select-none leading-none">
            {t.code}
          </h1>
        </motion.div>

        {/* Title & Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-color)] mb-4 tracking-tight">
          {t.title}
        </h2>

        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-lg mx-auto">
          {t.message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${lng}`}
            className="group inline-flex items-center gap-2 bg-[var(--accent-color)] text-white dark:text-zinc-900 px-8 py-3.5 rounded-full font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <HomeIcon className="w-5 h-5" />
            {t.homeButton}
          </Link>

          <Link
            href={`/${lng}/contact`}
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium border border-[var(--card-border)] text-[var(--text-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
          >
            {t.contactButton}
            <ArrowIcon
              className={`w-4 h-4 transition-transform duration-300 ${isRTL ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
