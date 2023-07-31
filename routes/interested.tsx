import { Head } from "$fresh/runtime.ts";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import InterestedHero from "../components/InterestedHero.tsx";

export default function Interested() {
  return (
    <>
      <Head>
        <title>Hallpass</title>
        <meta 
          name="description"
          content="The all-in-one hallway management software built for the future. Built by educators, for educators."
        />
      </Head>
      <Header active="true" />
      <InterestedHero />
      <Footer children="" />
    </>
  );
}
