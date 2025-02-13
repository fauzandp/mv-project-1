import App, { AppContext, AppProps } from "next/app";
import "../globals.css";
import "../menu.css";
import "../banner.css";
import "../detail.css";
import "../card.css";
import Layout from "@/components/layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);

  return { ...ctx };
};
