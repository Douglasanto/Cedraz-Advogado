import { Cards } from "./layout/Cards";
import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";
import ImageT from "@/assets/Icon-001.webp";
import ImageT2 from "@/assets/Icon-002.webp";
import ImageT3 from "@/assets/Icon-03.webp";
import ImageT4 from "@/assets/Icon-04.webp";
import ImageT5 from "@/assets/Icon-05.webp";

export function Work() {
  return (
    <section id="Trabalho" className="w-full h-auto bg-white py-14 px-6">
      <Container className="flex flex-col items-center">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-6">
          <div className="text-white pt-12">
            <h3 className="text-primary text-sm mb-2 tracking-[0.5em]">
              DIFERENCIAIS
            </h3>
            <h2 className="text-2xl mb-2 text-black">
              Por que escolher a
              <span className="text-primary">
                {" "}
                João Cedraz | Advogado Imobiliário?
              </span>
            </h2>
            <p className="text-lg text-black">
              Na João Cedraz Advogado Imobiliário, entendemos que ao nos
              escolher como seu assessor jurídico, você dará início a uma
              parceria sólida, transparente e duradoura, crucial para você ter
              sucesso e segurança nos seus negócios imobiliários e na luta em
              defesa dos seus direitos.
            </p>
          </div>
          <Cards
            text="Compromisso Pessoal:"
            description=" Vamos além do papel tradicional de advogados, nós nos
              comprometemos pessoalmente com você o seu sucesso. Nosso objetivo
              é oferecer não apenas assistência jurídica, mais tranquilidade,
              confiança e transparência em cada etapa."
            src={ImageT}
            alt="ImageT"
          />
          <Cards
            text="Experiência Especializada"
            description="Nossa equipe é formada por profissionais altamente capacitados em direito imobiliário, direito contratual pela Escola de Direito da FGV São Paulo, além de mais de 9 anos de experiência em transações e contratos imobiliários e no contencioso estratégico na defesa dos direitos imobiliários dos clientes."
            src={ImageT2}
            alt="ImageT"
          />
          <Cards
            text="Abordagem Customizada e Humanizada"
            description="Entendemos que cada cliente tem um caso específico. Nossas soluções são personalizadas para atender às suas necessidades de forma única, com uma experiência jurídica sob medida para você, levando sempre em consideração as suas individualidades para proporcionar a melhor experiência para você durante a parceria."
            src={ImageT3}
            alt="ImageT"
          />
          <Cards
            text="Transparência e Comunicação Clara"
            description="Valorizamos a transparência em todas as etapas do processo. Mantemos uma comunicação clara e eficaz, garantindo que você compreenda todos os passos do serviço."
            src={ImageT4}
            alt="ImageT"
          />
          <Cards
            text="Assessoria online"
            description="Você terá à disposição um assessor parceiro especialista de forma totalmente on-line, sem precisar se deslocar otimizando o seu tempo e conferindo a você maior conforto e comodidade durante os atendimentos."
            src={ImageT5}
            alt="ImageT"
          />
        </div>
        <SubmitButton
          className="w-[350px] h-full rounded-full"
          text="Fale Conosco"
        />
      </Container>
    </section>
  );
}
