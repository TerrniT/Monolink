import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ pageMeta }: any) {

  const meta = {
    title: 'Monolink',
    description: "Some description for SEO",
    type: 'website',
    ...pageMeta,
  }

  return (
    <Html lang="en">
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <link rel='icon' href='/monolink-rev.svg' />
        <meta
          property='og:url'
          content={`https://monolink.vercel.app`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Monolink' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {meta.data && (
          <meta property='articel:published_time' content={meta.date} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
