const translations = {
  en: 'Skip to main content',
  de: 'Zum Hauptinhalt springen',
  fa: 'پرش به محتوای اصلی',
};

export default function SkipToContent({ lng }) {
  const text = translations[lng] || translations.en;

  return (
    <a
      href="#main-content"
      // 1. sr-only: Hides it visually but keeps it accessible to screen readers.
      // 2. focus:not-sr-only: Makes it visible ONLY when focused via keyboard (Tab key).
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[100] focus:px-6 focus:py-3 focus:bg-[var(--accent-color)] focus:text-white focus:rounded-full focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent-color)] transition-all duration-300"
      style={{ fontFamily: lng === 'fa' ? "'IRANSans', sans-serif" : "'Poppins', sans-serif" }}
    >
      {text}
    </a>
  );
}
