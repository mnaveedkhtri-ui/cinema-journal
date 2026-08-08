import { MetadataRoute } from 'next';

const baseUrl = 'https://cinema-journal.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages — adjust list to match your actual routes
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
  ];

  // TODO: Once you confirm your blog source (markdown / CMS / DB),
  // fetch posts here and map them in. Example:
  //
  // const posts = await getAllPosts();
  // const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt ?? post.publishedAt,
  //   changeFrequency: 'monthly',
  //   priority: 0.7,
  // }));
  //
  // return [...staticPages, ...blogPages];

  return staticPages;
}
