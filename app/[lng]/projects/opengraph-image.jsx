import { ImageResponse } from 'next/og';
import OgImage from '../../../components/og/OgImage';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { lng } = await params;

  const [interBold, vazirBold] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    ).then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/vazirmatn/v33/VMh3L-OuI2Q5w32p7n0wQg.woff2').then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  const titles = {
    en: 'Selected Projects',
    de: 'Ausgewählte Projekte',
    fa: 'نمونه‌کارهای منتخب',
  };

  const subtitles = {
    en: 'Case studies & open-source work',
    de: 'Fallstudien & Open-Source-Arbeiten',
    fa: 'مطالعات موردی و پروژه‌های متن‌باز',
  };

  return new ImageResponse(<OgImage title={titles[lng]} subtitle={subtitles[lng]} lng={lng} />, {
    ...size,
    fonts: [
      { name: 'Inter', data: interBold, weight: 700 },
      { name: 'Vazirmatn', data: vazirBold, weight: 700 },
    ],
  });
}
