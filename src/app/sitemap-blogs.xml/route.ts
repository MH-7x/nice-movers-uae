import { APP } from '@/lib/App';
import { fetchAllBlogs } from '@/lib/fetchBlogs';

export async function GET() {
  try {
    const blogs = await fetchAllBlogs();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
>
  ${blogs
    .map((blog) => {
      const lastmod = new Date(blog.updatedAt ?? blog.createdAt)
        .toISOString()
        .split('T')[0]; // "YYYY-MM-DD"
      const loc = encodeURI(`${APP.url}/blog/${blog.slug}`);
      const imageLoc = /^https?:\/\//.test(blog.image)
        ? blog.image
        : `${APP.url}${blog.image.startsWith('/') ? '' : '/'}${blog.image}`;

      return `
    <url>
      <loc>${escapeXml(loc)}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <image:image>
        <image:loc>${escapeXml(imageLoc)}</image:loc>
        <image:caption>${escapeXml(blog.title)}</image:caption>
      </image:image>
    </url>`;
    })
    .join('')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}

// Helper to escape XML entities
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
