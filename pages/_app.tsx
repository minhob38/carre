import type { AppProps } from "next/app";
import { wrapper } from "../store";
import "../assets/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>공통 app</div>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
