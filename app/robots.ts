import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // If you ever add an /api folder, you would disallow it here:
      // disallow: ['/api/'],
    },
    sitemap: 'https://meyssamdev.ir/sitemap.xml',
  };
}
