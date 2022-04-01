import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AdapterContextProvider } from "../context/AdapterContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdapterContextProvider>
      <Component {...pageProps} />
    </AdapterContextProvider>
  );
}
export default MyApp;
