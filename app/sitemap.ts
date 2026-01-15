import { MetadataRoute } from 'next';
import { getAllTourSlugs } from '@/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://pikme.org'; // Replace with your actual domain
  const slugs = await getAllTourSlugs();

  // Generate tour pages
  const tourUrls = slugs.map((slug) => ({
    url: `${baseUrl}/activity/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];

  return [...staticUrls, ...tourUrls];
}
