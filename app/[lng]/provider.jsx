'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { CookiesProvider } from 'react-cookie';

export default function ThemeProvider({ children, ...props }) {
  return (
    <CookiesProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </CookiesProvider>
  );
}
