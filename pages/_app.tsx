import "~/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>A9 Tools - A列車で行こう9向けツール</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
