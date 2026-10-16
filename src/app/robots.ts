
import { APP } from '@/lib/App'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/static/',
          '/server/',
          '/private/',
          '/admin/',
        ],
      },
    ],
    sitemap: [
      `${APP.url}/sitemap.xml`,
      `${APP.url}/sitemap-blogs.xml`

    ],
  }
}
