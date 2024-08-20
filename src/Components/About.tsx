import Image from "next/image";
import { Container } from "./layout/Container";
import { SubAbout } from "./SubAbout";
import Mockup from "@/assets/Mockup.png";

export function About() {
  return (
    <section id="Sobrenos" className="bg-second py-14 md:px-6">
      <Container>
        <SubAbout />
        <div className="text-white pr-4 gap-8 lg:flex lg:flex-row">
          <div>
            <Image src={Mockup} alt="Mockup" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-primary text-sm mb-4 tracking-[0.5em]">
              SOBRE NÓS
            </h2>
            <h3 className="text-3xl mb-4">
              Coheça a{" "}
              <span className="text-primary">
                João Cedraz | Advogado Imobiliário
              </span>
            </h3>
            <p className="mb-4">
              Na João Cedraz Advogado Imobiliário, somos mais que advogados
              especializados em direito imobiliário e contratual; somos seus
              Assessores Parceiros dedicados a oferecer soluções para atender a
              suas necessidades, a tornar seus negócios imobiliários seguros e
              descomplicados, e a lutar pelos seus direitos em busca da mais
              lídima justiça.
            </p>
            <p className="pb-6">
              Nossa equipe combina experiência e capacidade técnica, compromisso
              e foco em você e suas necessidades, atendimento humanizado,
              personalizado e transparente, tudo para garantir tranquilidade e
              excelência na solução que precisa, de forma 100% customizada e
              on-line , em todas as etapas do processo.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
