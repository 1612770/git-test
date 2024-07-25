import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { App as AntdApp, ConfigProvider } from "antd";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Inter",
        },
        components: {
          Collapse: {
            contentPadding: 0,
          },
        },
      }}
    >
      <AntdApp>
        <Component {...pageProps} />
      </AntdApp>
    </ConfigProvider>
  );
}
