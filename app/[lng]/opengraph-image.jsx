import { ImageResponse } from 'next/og';
import OgImage from '../../components/og/OgImage';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }) {
  const { lng } = await params;

  // 1. Fetch the fonts from Google Fonts (Inter for EN/DE, Vazirmatn for FA)
  const [interBold, vazirBold] = await Promise.all([
    fetch(
      'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
    ).then((res) => res.arrayBuffer()),
    fetch('https://fonts.gstatic.com/s/vazirmatn/v33/VMh3L-OuI2Q5w32p7n0wQg.woff2').then((res) =>
      res.arrayBuffer(),
    ),
  ]);

  // 2. Define the text for each language
  const titles = {
    en: 'Full-Stack Engineer',
    de: 'Full-Stack Ingenieur',
    fa: 'مهندس فول‌استک',
  };

  // 3. Generate the Image
  return new ImageResponse(
    <OgImage title={titles[lng]} subtitle="Building scalable web & Java solutions" lng={lng} />,
    {
      ...size,
      fonts: [
        { name: 'Inter', data: interBold, weight: 700 },
        { name: 'Vazirmatn', data: vazirBold, weight: 700 },
      ],
    },
  );
}
