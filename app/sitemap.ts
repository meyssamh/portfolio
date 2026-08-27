import { MetadataRoute } from 'next';

// Your base URL and supported languages
const baseUrl = 'https://meyssamdev.ir';
const languages = ['en', 'de', 'fa'] as const;

// Your main routes
const routes = ['', '/about', '/projects', '/contact', '/resume'] as const;

// Your specific project slugs (for case studies)
const projectSlugs = ['box-pwa', 'classroom-system', 'silicon-box', 'spring-classroom'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Generate URLs for all main pages in all languages
  const pages = languages.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      // ✅ Apply 'as const' directly to the string literals inside the ternary
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : 0.8,
    })),
  );

  // 2. Generate URLs for all project case studies in all languages
  const projects = languages.flatMap((lang) =>
    projectSlugs.map((slug) => ({
      url: `${baseUrl}/${lang}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
  );

  // 3. Combine them and return
  return [...pages, ...projects];
}
