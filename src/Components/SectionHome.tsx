"use client";

import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";

export function SectionHome() {
  return (
    <section
      id="Home"
      className="w-full bg-img_bg_hero bg-no-repeat bg-top bg-cover sm:h-[100vh]"
    >
      <Container className="flex items-center sm:h-[100vh] sm:px-[3rem]">
        <div className="max-w-[600px] flex flex-col mt-60">
          <h1 className="text-white text-4xl font-black font-myriadBold mb-4 sm:text-5xl">
            Riscos reduzidos,{" "}
            <span className="text-primary">soluções ampliadas.</span>
          </h1>
          <p className="text-white text-xl max-w-[485px] mb-8">
            Conte com uma assessoria jurídica personalizada e proteja-se contra
            problemas e armadilhas nos seus negócios imobiliários.
          </p>
          <SubmitButton
            className="w-full h-full rounded-full md:w-[300px]"
            text="Fale Conosco"
          />
        </div>
      </Container>
    </section>
  );
}
