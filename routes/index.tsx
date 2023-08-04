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
        <link rel="icon" href="/favicon.png" />
        <meta name="name" itemProp="name" content="Hallpass" />
        <meta name="description" content="Streamline your hallway management, use Hallpass to ditch the paper and clipboard signout sheets." />
        <meta name="google" content="notranslate" />
        <meta name="author" content="Muscara Software Solutions, LLC" />
        <meta name="keywords" content="hallway, hallway management, hallpass, digital hallpass, smartpass, smart pass" />
        <meta name="reply-to" content="support@hallpass.gg" />
        <meta name="email" content="support@hallpass.gg" />

        <meta property="og:site_name" content="Hallpass" />
        <meta property="og:url" content="https://hallpass.gg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hallpass" />
        <meta property="og:image" content="https://hallpass.gg/favicon.png" />
        <meta property="og:description" content="Streamline your hallway management, use Hallpass to ditch the paper and clipboard signout sheets." />
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
