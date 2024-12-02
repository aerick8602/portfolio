import Head from "next/head";
import Layout from "./layout/layout";

export default function Home({ Component, pageProps }) {
  // useEffect(() => {
  //   if (localStorage.getItem("theme")) {
  //     document.documentElement.setAttribute(
  //       "data-theme",
  //       localStorage.getItem("theme")
  //     );
  //   }
  // }, []);

  return (
    <Layout>
      {/* <Component {...pageProps} /> */}
    </Layout>
  );
}
