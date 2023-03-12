import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { defineCustomElements } from "web-component-address/loader";

export default function App({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    defineCustomElements(window);
  }

  return <Component {...pageProps} />;
}
