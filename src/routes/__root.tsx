import { getSession } from '@/lib/auth/auth.functions'
import { getTheme } from '@/lib/theme/theme.functions'
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
      {
        title: 'Ardian Pratama',
        description:
          'Setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik. Di ruang ini, aku merajut pikiran dan perasaan menjadi satu keselarasan, sebagai cara untuk menghadirkan makna dalam setiap langkah yang kujalani.',
      },
      {
        name: 'author',
        content: 'Ardian Pratama',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Ardian Pratama',
      },
      {
        property: 'og:description',
        content:
          'Setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik.',
      },
      {
        property: 'og:url',
        content: 'http://ardian-pratama.my.id',
      },
      {
        property: 'og:site_name',
        content: 'Ardian Pratama',
      },
      {
        property: 'og:image',
        content:
          'http://ardian-pratama.my.id/images/ardian-pratama-meta-image.png',
      },
      {
        property: 'og:image:width',
        content: '1200',
      },
      {
        property: 'og:image:height',
        content: '630',
      },
      {
        property: 'og:locale',
        content: 'id_ID',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Ardian Pratama',
      },
      {
        name: 'twitter:description',
        content:
          'Setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik.',
      },
      {
        name: 'twitter:image',
        content:
          'http://ardian-pratama.my.id/images/ardian-pratama-meta-image.png',
      },
      {
        name: 'twitter:url',
        content: 'http://ardian-pratama.my.id',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  beforeLoad: async () => {
    const theme = await getTheme()
    const session = await getSession()

    return { theme, session }
  },
  errorComponent: () => {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p>Error</p>
      </div>
    )
  },
  notFoundComponent: () => {
    return (
      <div className="flex min-h-svh items-center justify-center">
        <p>Not Found</p>
      </div>
    )
  },
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext()

  return (
    <html
      lang="id"
      className={`${theme} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="theme-color"
          content={theme === 'dark' ? '#0a0a0a' : '#ffffff'}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
