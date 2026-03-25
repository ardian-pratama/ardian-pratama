import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sitemap.xml')({
  server: {
    handlers: {
      GET: async () => {
        const sitemap = 
        `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
              <loc>https://ardian-pratama.vercel.app/</loc>
              <lastmod>2026-03-25</lastmod>
            </url>
            <url>
              <loc>https://ardian-pratama.vercel.app/about</loc>
              <lastmod>2026-03-25</lastmod>
            </url>
            <url>
              <loc>https://ardian-pratama.vercel.app/achievements</loc>
              <lastmod>2026-03-25</lastmod>
            </url>
            <url>
              <loc>https://ardian-pratama.vercel.app/creations</loc>
              <lastmod>2026-03-25</lastmod>
            </url>
            <url>
              <loc>https://ardian-pratama.vercel.app/blogs</loc>
              <lastmod>2026-03-25</lastmod>
            </url>
          </urlset>`

        return new Response(sitemap, {
          headers: {
            'Content-Type': 'application/xml',
          },
        })
      },
    },
  },
})

