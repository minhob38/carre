/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import styled from '@emotion/styled';
import { wrapper, store } from '@store/index';
import '@assets/styles/globals.css';
import * as colors from '@constants/colors';
import { ErrorBoundary } from 'react-error-boundary';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from '@animations/Loading';

const MobileWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.WHITE2};
  overflow: hidden;
`;

/**
 * 왜 안되지...
 */
function ErrorFallback({ error, resetErrorBoundary }) {
  return <div>error...</div>;
}

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);

  return (
    // <PersistGate
    //   persistor={persistor}
    //   loading={<Loading text={'새로고침 ...'} />}
    // >
    <MobileWrapper>
      <Head>
        <meta property="og:title" content="CARRE" />
        <meta
          property="og:description"
          content="차고플 땐 카레, 첫차 살 땐 카레"
        />
        <meta property="og:url" content="https://www.carre.kr" />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/57255024/192136112-23b71170-6f9a-4f3b-bded-9e9ae561891d.png"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1,  minimum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.5/variable/pretendardvariable.css"
        />
      </Head>
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}> */}
      <Component {...pageProps} />
      {/* </ErrorBoundary> */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </MobileWrapper>
    // </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
