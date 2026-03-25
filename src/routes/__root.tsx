import { getTheme } from '@/features/theme/theme.functions';
import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import appCss from '../styles.css?url';

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
        title: 'Ardian Pratama',
        description:
          'Seorang pembelajar yang meyakini bahwa setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik. Di ruang ini, aku merajut pikiran dan perasaan menjadi satu keselarasan, sebagai cara untuk menghadirkan makna dalam setiap langkah yang kujalani.',
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
          'Seorang pembelajar yang meyakini bahwa setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik.',
      },
      {
        property: 'og:url',
        content: 'https://ardian-pratama.vercel.app',
      },
      {
        property: 'og:site_name',
        content: 'Ardian Pratama',
      },
      {
        property: 'og:image',
        content: 'https://ardian-pratama.vercel.app/images/ardian-pratama-og.png',
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
          'Seorang pembelajar yang meyakini bahwa setiap ide membutuhkan fondasi yang kuat untuk bisa tumbuh dengan baik.',
      },
      {
        name: 'twitter:image',
        content: 'https://ardian-pratama.vercel.app/images/ardian-pratama-og.png',
      },
      {
        name: 'twitter:url',
        content: 'https://ardian-pratama.vercel.app',
      },
      {
        name: 'google-site-verification',
        content: 'YWn6JzpAG8yxgxmtLJGJQD9LkQfGh882gdmsnfxZqss'
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  beforeLoad: async () => {
    const theme = await getTheme();

    return { theme };
  },
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext();

  return (
    <html
      lang='id'
      className={`${theme} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name='theme-color'
          content={theme === 'dark' ? '#0a0a0a' : '#ffffff'}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
