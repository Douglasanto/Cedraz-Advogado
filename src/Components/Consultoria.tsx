import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";

export function Consultoria() {
  return (
    <section
      id="Contato"
      className="bg-img_bg_hero_orange bg-no-repeat bg-center bg-cover"
    >
      <Container className="w-[750px] px-6 py-14">
        <div className="flex flex-col items-center gap-2 ">
          <h3 className="text-[2rem] mb-3 font-bold text-center text-white">
            Chegou a hora de você ter uma assessoria jurídica 100% customizada e
            on-line
          </h3>
          <p className="text-center text-white">
            Estamos prontos para atender você e te ajudar a solucionar suas
            necessidades e proteger seus direitos! Toque no botão e fale agora
            com seu Assessor Parceiro.
          </p>
          <SubmitButton
            className="w-full h-full rounded-full"
            text="Fale Conosco"
          />
        </div>
      </Container>
    </section>
  );
}
