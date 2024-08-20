import { Container } from "./layout/Container";
import { Faq } from "../types";
import FaqItem from "./layout/ServicesFAQ";

export function Services() {
  const faqs: Faq[] = [
    {
      question: "Contratos e Negócios Imobiliários:",
      answers: [
        {
          content: "Auditoria Jurídica (due diligence) e análise de riscos",
        },
        {
          content: "Compra e Venda",
        },
        {
          content: "Locação e Comodato",
        },
        {
          content:
            "Constituição de Garantias (Hipoteca e Alienação Fiduciária)",
        },
        {
          content: "Instituição de Condomínio Civil e Edilício",
        },
        {
          content: "Instituição de Condomínio Civil e Edilício",
        },
        {
          content: "Entre outros…",
        },
      ],
    },
    {
      question: "Regularização do Imóvel:",
      answers: [
        {
          content: "Adjudicação Compulsória",
        },
        {
          content: "Usucapião",
        },
        {
          content: "Retificação de Matrícula",
        },
        {
          content: "Instituição de Condomínio",
        },
        {
          content: "Entre outros…",
        },
      ],
    },
    {
      question: "Ações Judiciais na Defesa dos Direitos Envolvendo Imóveis:",
      answers: [
        {
          content: "Ações em defesa da Posse e da Propriedade",
        },
        {
          content: "Ação de Usucapião",
        },
        {
          content: "Ações Locatícias",
        },
        {
          content: "Ação de Rescisão de Compra e Venda",
        },
        {
          content: "Ações contra Condomínio",
        },
        {
          content: "Ações de Vícios Construtivos, etc.",
        },
        {
          content: "Entre muitas outras…",
        },
      ],
    },
    {
      question: "Assessoria Jurídica em Leilão de Imóveis:",
      answers: [
        {
          content: "Elaboração de Estratégias para Participação em Leilões",
        },
        {
          content: "Análise Jurídica De Risco Prévia",
        },
        {
          content: "Acompanhamento Legal Durante o Processo do Leilão",
        },
        {
          content: "Resolução de Questões Jurídicas Após a Arrematação",
        },
        {
          content: "Providências para desocupar o imóvel",
        },
        {
          content: "Entre outros…",
        },
      ],
    },
  ];

  return (
    <section
      id="Serviços"
      className="w-full h-auto bg-second pt-14 pb-[130px] px-6"
    >
      <Container className="flex flex-col items-center justify-between gap-7 md:flex-row">
        <div className="text-white">
          <h3 className="text-primary text-sm mb-2 tracking-[0.5em]">
            SERVIÇOS
          </h3>
          <h2 className="text-2xl mb-2">
            Vai além de uma simples{" "}
            <span className="text-primary">assessoria juridica!</span>
          </h2>
          <p className="text-lg">
            Oferecemos uma solução personalizada para garantir a proteção de
            você, seus direitos e seus interesses em transações imobiliárias
            urbanas ou rurais.
          </p>
        </div>
        <div className="container mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
