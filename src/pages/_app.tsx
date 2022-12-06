import { AppProps } from "next/app";
import { Header } from "../components/Header";

import { SessionProvider as NextAuthProvider } from "next-auth/react";

import "../styles/global.scss";

function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  console.log("Session: ", session);
  return (
    <NextAuthProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp
