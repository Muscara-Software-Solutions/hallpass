import { Head } from "$fresh/runtime.ts";
import Features from "../components/Features.tsx";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import Preview from "../components/Preview.tsx";
import Pricing from "../components/Pricing.tsx";
import Quote from "../components/Quote.tsx";

export default function Home() {
  return (
    <html class="h-full bg-gray-100">
      <Head>
        <title>Hallpass</title>
      </Head>
      <body class="h-full">
        <Header active="true" />
        <Preview />
        <Features />
        <Quote />
        <Pricing />
        <Footer children="" />
      </body>
    </html>
  );
}
