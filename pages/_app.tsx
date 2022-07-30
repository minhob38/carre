/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import styled from '@emotion/styled';
import { wrapper } from '@store/index';
import '@assets/styles/globals.css';
import * as colors from '@constants/colors';

const MobileWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.WHITE2};
  overflow: hidden;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileWrapper>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1,  minimum-scale=1.0, user-scalable=no, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </MobileWrapper>
  );
}

export default wrapper.withRedux(MyApp);
