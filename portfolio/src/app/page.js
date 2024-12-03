
import Layout from "./layout/layout";

export default function Home({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
