import { ImageResponse } from 'next/og';
import OgImage from '../../../../components/og/OgImage';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { lng, slug } = await params;

  // 1. Fetch the fonts
  const [interBold, vazirBold] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    ).then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/vazirmatn/v33/VMh3L-OuI2Q5w32p7n0wQg.woff2').then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  // 2. Map slugs to their translated titles and subtitles
  const projectData = {
    'box-pwa': {
      en: { title: 'Box - PWA Shopping List', subtitle: 'Seamless offline shopping management' },
      de: { title: 'Box - PWA Einkaufsliste', subtitle: 'Nahtloses Offline-Shopping' },
      fa: { title: 'Box - لیست خرید PWA', subtitle: 'مدیریت خرید آفلاین' },
    },
    'classroom-system': {
      en: { title: 'Classroom Management', subtitle: 'Enterprise-grade attendance tracking' },
      de: { title: 'Klassenraum-Management', subtitle: 'Anwesenheitsverfolgung' },
      fa: { title: 'مدیریت کلاس درس', subtitle: 'سیستم پیگیری حضور و غیاب' },
    },
  };

  // 3. Get the data for the current slug (fallback to generic Projects if slug is missing)
  const data = projectData[slug]?.[lng] || {
    title: lng === 'fa' ? 'نمونه‌کارها' : lng === 'de' ? 'Projekte' : 'Projects',
    subtitle: '',
  };

  // 4. Generate the Image
  return new ImageResponse(<OgImage title={data.title} subtitle={data.subtitle} lng={lng} />, {
    ...size,
    fonts: [
      { name: 'Inter', data: interBold, weight: 700 },
      { name: 'Vazirmatn', data: vazirBold, weight: 700 },
    ],
  });
}
