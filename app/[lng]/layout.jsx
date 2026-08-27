import { dir } from 'i18next';
import { MotionConfig } from 'framer-motion';
import { languages } from '../i18n/settings';
import ThemeProvider from './provider';
import './globals.css';
import PageTransition from '../../components/pageTransition/PageTransition';
import SmoothScroll from '../../components/smoothScroll/SmoothScroll';
import ScrollProgress from '../../components/ui/ScrollProgress';
import SkipToContent from '../../components/ui/SkipToContent';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata = {
  metadataBase: new URL('https://meyssamdev.ir'),
  title: 'Seyed Meyssam Hosseinifard | Web Developer & JavaScript Developer',
  description:
    'Seyed Meyssam Hosseinifard is a skilled web developer and JavaScript developer specializing in Next.js, React, and JavaScript. Explore his portfolio, learn about modern web technologies, and discover high-performance software engineering solutions.',
  keywords:
    'Web Developer, Next.js Developer, React Developer, JavaScript Developer, Frontend Engineer, Software Engineer, JavaScript, Portfolio, Meyssam Hosseinifard',
  author: 'Seyed Meyssam Hosseinifard',
  openGraph: {
    title: 'Seyed Meyssam Hosseinifard | Web Developer & JavaScript Developer',
    description:
      'Explore the portfolio of Seyed Meyssam Hosseinifard, a skilled Next.js, React developer, and JavaScript developer. See my latest projects and contact me for collaboration.',
    url: 'https://meyssamdev.ir',
    siteName: 'Meyssam Hosseinifard Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meyssam Hosseinifard Portfolio',
      },
    ],
    type: 'website',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Seyed Meyssam Hosseinifard',
      url: 'https://meyssamdev.ir',
      image: 'https://meyssamdev.ir/og-image.jpg',
      jobTitle: 'Web Developer & JavaScript Developer',
      description:
        'Web developer and JavaScript developer specializing in Next.js, React and modern web technologies.',
      sameAs: [
        'https://github.com/meyssamh',
        'https://www.linkedin.com/in/seyed-meyssam-h-b97318166',
        'https://x.com/JungeAmadeus?t=s8knmGOJkGRoyK8YBYvckg&s=08',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Applied Scientific University of Industries of Iran',
        sameAs: 'https://msi-uast.ir',
      },
    }),
  },
  twitter: {
    card: 'summary_large_image',
    site: '@JungeAmadeus',
    title: 'Seyed Meyssam Hosseinifard | Web Developer & JavaScript Developer',
    description:
      'Discover my projects in Next.js, React, and JavaScript development. Contact me for collaboration!',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon-32x32.png',
  },
};

export default async function RootLayout({ children, params }) {
  const { lng } = await params;

  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning={true}>
      <head>
        {/* ✅ Fixed: Changed from "../../favicon.svg" to "/favicon.svg" */}
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      {/* ✅ Added bg-[var(--background-color)] to force the background to change */}
      <body className="select-none bg-[var(--background-color)]" suppressHydrationWarning>
        <SkipToContent lng={lng} />
        <ScrollProgress lng={lng} />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <MotionConfig reducedMotion="user">
            <SmoothScroll>
              <main
                id="main-content"
                tabIndex="-1"
                className="min-h-screen outline-none scroll-mt-24 md:scroll-mt-32"
              >
                <PageTransition>{children}</PageTransition>
              </main>
            </SmoothScroll>
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
