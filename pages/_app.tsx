/** @jsxImportSource @emotion/react */
import type { AppProps } from "next/app";
import styled from "@emotion/styled";
import { wrapper } from "../store";
import "../assets/styles/globals.css";

const MobileWrapper = styled.a`
  width: 100%;
  height: 100%;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MobileWrapper>
      <Component {...pageProps} />
    </MobileWrapper>
  );
}

export default wrapper.withRedux(MyApp);
