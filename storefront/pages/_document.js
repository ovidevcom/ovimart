/*
In production the stylesheet is compiled to .next/static/style.css.
The file will be served from /_next/static/style.css
You could include it into the page using either next/head or a custom _document.js.
*/

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
        <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
        <link href="https://unpkg.com/@blueprintjs/core@3.0.1/lib/css/blueprint.css" rel="stylesheet" />
        <link href="https://unpkg.com/@blueprintjs/icons@3.0.1/lib/css/blueprint-icons.css" rel="stylesheet" />
    
          <link
            rel='stylesheet'
            href='/_next/static/style.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}