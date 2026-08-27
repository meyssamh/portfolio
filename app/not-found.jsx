import './[lng]/globals.css';
import ThemeProvider from './[lng]/provider';
import { MotionConfig } from 'framer-motion';
import NotFoundClient from './NotFoundClient';

export default function NotFound() {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="select-none bg-[var(--background-color)] text-[var(--text-color)] transition-colors duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionConfig reducedMotion="user">
            {/* The Client Component will detect the language automatically */}
            <NotFoundClient />
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
