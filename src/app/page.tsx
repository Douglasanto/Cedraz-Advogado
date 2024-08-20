import { About } from "@/Components/About";
import { Consultoria } from "@/Components/Consultoria";
import { FAQ } from "@/Components/FAQ";
import { Footer } from "@/Components/Footer";
import { Carousel } from "@/Components/layout/Carosel";
import { SectionHome } from "@/Components/SectionHome";
import { Services } from "@/Components/Services";
import { Work } from "@/Components/Work";

export default function Home() {
  return (
    <>
      <SectionHome />
      <Carousel />
      <Services />
      <Work />
      <About />
      <Consultoria />
      <FAQ />
      <Footer />
    </>
  );
}
