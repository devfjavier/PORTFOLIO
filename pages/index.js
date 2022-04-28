import Head from "next/head";
import Header from "../components/core-sections/header";
import Footer from "../components/core-sections/Footer";
import About from "../components/page-sections/About";
import Banner from "../components/page-sections/Banner";
import Contact from "../components/page-sections/contact";
import Projects from "../components/page-sections/projects";
import LinksChangeColor from "../components/elements/LinksChangeColor";

export default function Page() {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="React Javascript Frontend devfjavier" />
      <title>Frontend Javier</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <main>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
    <LinksChangeColor/>
  </>
}