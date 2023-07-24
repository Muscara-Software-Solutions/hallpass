import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Features from "../components/Features.tsx";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hallpass</title>
      </Head>
      <Header active="true" />
      <Hero />
      <Features />
      <Footer children="" />
    </>
  );
}
