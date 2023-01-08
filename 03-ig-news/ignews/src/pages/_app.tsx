import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import "../styles/global.scss";

const roboto = Roboto({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
