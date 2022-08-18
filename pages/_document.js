import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const meta = {
    title: "Cosas de Anime",
    description:
      "Porfolio, donde se viasualizan mis trabajos mas espectaculares y especiales.",
    image: "public/images/favicon.icon",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jorgevenkas" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <div id="modal" />  
        <NextScript />
      </body>
    </Html>
  );
}
