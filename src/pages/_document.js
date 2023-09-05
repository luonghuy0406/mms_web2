import { Children } from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
const Favicon = () => (
  <>
    <link
      rel="icon"
      href="/mms_logo.png"
    />
  </>
);

const Fonts = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
  </>
);

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <Fonts />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: (App) => (props) => (
      <App
        {...props}
      />
    )
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...Children.toArray(initialProps.styles)]
  };
};

export default CustomDocument;
