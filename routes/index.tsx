import { Head } from "$fresh/runtime.ts";
import Features from "../components/Features.tsx";
import Features2 from "../components/Features2.tsx";
import Footer from "../components/Footer.tsx";
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
        <meta name="keywords" content="what is a hallpass, hallpass meaning, hallpass clever, hallpass app, smartpass app, e-Hall, e-Hall pass, hallway, hallway management, hallway management software, e-hallpass, epass, e hallpass, ehallpass, hallpass, digital hallpass, smartpass, smart pass, student bathroom tracker, student vape detector, securly hallpass, securly ehallpass, securely e-hallpass, securly e hallpass, securly" />
        <meta name="reply-to" content="support@hallpass.gg" />
        <meta name="email" content="support@hallpass.gg" />

        <meta property="og:site_name" content="Hallpass" />
        <meta property="og:url" content="https://hallpass.gg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hallpass" />
        <meta property="og:image" content="https://hallpass.gg/seo.png" />
        <meta property="og:description" content="Streamline your hallway management, use Hallpass to ditch the paper and clipboard signout sheets." />
      </Head>
      <body class="h-full">
        <Preview2 />
        <section id="features">
          <Features2 />
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
