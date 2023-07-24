
import { Head } from "$fresh/runtime.ts";
import FourOFour from "../components/404.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <Header active="true" />
      <FourOFour />
      <Footer children="" />
    </>
  );
}
