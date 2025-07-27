
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
          '/_next/',
          '/static/',
          '/server/',
          '/private/',
          '/admin/',
        ],
      },
    ],
    sitemap: `${APP.url}/sitemap.xml`,
    host: `${APP.url}`,
  }
}
