import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.VERCEL_GIT_COMMIT_SHA}
      <Component {...pageProps} />
    </>
  );
}
