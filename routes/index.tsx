import { Head } from "$fresh/runtime.ts";
import Features from "../components/Features.tsx";
import Footer from "../components/Footer.tsx";
import Preview from "../components/Preview.tsx";
import Preview2 from "../components/Preview2.tsx";
import Pricing from "../components/Pricing.tsx";
import Quote from "../components/Quote.tsx";

export default function Home() {
  return (
    <html class="h-full bg-gray-100">
      <Head>
        <title>Hallpass</title>
      </Head>
      <body class="h-full">
        {/* <Preview /> */}
        <Preview2 />
        <section id="features">
          <Features />
        </section>
        <section id="testimonies">
          <Quote />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <Footer children="" />
      </body>
    </html>
  );
}
