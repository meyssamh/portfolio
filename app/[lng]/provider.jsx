'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CookiesProvider } from 'react-cookie';

export default function ThemeProvider({ children, ...props }) {
  return (
    // 1. CookiesProvider MUST wrap the app for useTranslation to work
    <CookiesProvider>
      {/* 2. ThemeProvider goes inside */}
      <NextThemesProvider
        {...props}
        themes={['light', 'dark']}
        defaultTheme="light"
        enableSystem={false}
      >
        {children}
      </NextThemesProvider>
    </CookiesProvider>
  );
}
