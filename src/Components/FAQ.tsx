import { Container } from "./layout/Container";
import { Faq } from "../types";
import FaqItem from "./layout/ServicesFAQ";

export function FAQ() {
  const faqs: Faq[] = [
    {
      question: "O que é uma auditoria imobiliária e para que serve?",
      answers: [
        {
          content:
            "O QUE É?\n\n Uma análise prévia da documentação do imóvel e das partes do negócio.",
        },
        {
          content:
            "POR QUE FAZER?\n\n Busca identificar os riscos envolvidos no negócio imobiliário pretendido, tanto em relação dao imóvel, quanto em relação às partes envolvidas.",
        },
      ],
    },
    {
      question: " Quando devo fazer uma Auditoria Imobiliária?",
      answers: [
        {
          content:
            "Apesar de se ouvir falar muito na análise prévia quando você for Comprar um Imóveis, recomenda-se que a Auditoria Imobiliáira seja realizada em todos os negócios imóbiliários.",
        },
        {
          content:
            "Por exemplo, quando se vai locar um imóvel é importantíssimo verificar alguns aspectos imobiliários e financeiros para evitar golpes.",
        },
      ],
    },
    {
      question: " O que devo fazer com o resultado?",
      answers: [
        {
          content:
            "Ao final de uma auditoria é gerado um relatório com os apontamentos identificados.",
        },
        {
          content:
            "O relatório deve ser utilizado por VOCÊ na tomada de decisão da realização ou não do negócio imobiliário pretendido, considerando-se os riscos identificados e os custos envolvidos; e na negociação e elaboração dos contratos.",
        },
      ],
    },
    {
      question: " A Auditoria Imobiliária é obrigatória?",
      answers: [
        {
          content:
            "A auditoria não é obrigatória, mas é extremamente recomendável para diminuir a sua exposição aos riscos do negócio.",
        },
        {
          content:
            "Os riscos não sumirão, mas serão conhecidos e, com isso, será possível negociar com a outra parte uma forma de resolver os problemas ou, em último caso, pular fora do negócio antes de ter prejuízo.",
        },
      ],
    },
  ];
  const faqs2: Faq[] = [
    {
      question: " O que é Regularização de Imóveis?",
      answers: [
        {
          content:
            "É muito vendida como um serviço limitado à formalizar a titularidade (o direito de propriedade) do imóvel em seu nome, o que é extremamente importante.",
        },
        {
          content:
            "Mas é claro que vai muito além disso. Trata-se de uma série de procedimentos adotados para solucionar problemas relacionados ao imóvel.",
        },
      ],
    },
    {
      question: " Por que devo fazer uma Regularização de Imóveis?",
      answers: [
        {
          content:
            "É essencial para garantir a segurança jurídica do imóvel. Um imóvel regularizado possui todos os documentos e licenças necessárias, o que proporciona tranquilidade ao proprietário e evita problemas legais no futuro.",
        },
        {
          content:
            "Além disso, a irregularidade pode diminuir o valor do imóvel e dificultar transações como venda, aluguel ou obtenção de financiamento.",
        },
      ],
    },
    {
      question: " Quando é necessário realizar uma Regularização?",
      answers: [
        {
          content:
            "É recomendado promover a regularização assim que identificado o problema na documentação ou na situação legal da propriedade.",
        },
        {
          content:
            "Também é importante regularizar imediatamente após a aquisição de um imóvel ou antes de iniciar qualquer tipo de obra ou reforma significativa.",
        },
        {
          content:
            "Quanto mais cedo o processo for iniciado, menores serão os riscos e custos envolvidos.",
        },
      ],
    },
    {
      question: "O que acontece se eu não fizer a regularização?",
      answers: [
        {
          content:
            "Propriedades não regularizadas estão sujeitas a multas, embargos, e até mesmo demolição. Além disso, pode dificultar transações imobiliárias, resultando em perda de oportunidades.",
        },
        {
          content:
            "A ausência de documentação adequada também pode afetar negativamente o valor do imóvel e sua aceitação como garantia em transações financeiras, como empréstimos ou hipotecas.",
        },
      ],
    },
  ];
  const faqs3: Faq[] = [
    {
      question: " O que é uma Adjudicação Compulsória?",
      answers: [
        {
          content:
            "O QUE É?\n\n A Adjudicação Compulsória é uma das ferramentas para regularização da titularidade processo judicial pelo qual o comprador busca garantir o direito à propriedade de um imóvel",
        },
        {
          content:
            "POR QUE FAZER?\n\n Quando o vendedor se recusa a lavrar a escritura pública de compra e venda após a quitação do pagamento pelo comprador do imóvel.",
        },
      ],
    },
    {
      question: " Como pode ser feita?",
      answers: [
        {
          content:
            "O procedimento de adjudicação compulsória pode ser realizado de forma extrajudicial - no Tabelionato de Notas e no Cartório de Registro de Imóveis - ou por meio de ação judicial.",
        },
      ],
    },
    {
      question: " O que eu preciso para realizar uma Adjudicação Compulsória?",
      answers: [
        {
          content:
            "É necessário que tenha havido um contrato de compromisso/promessa de compra e venda quitado (com comprovação) e com recusa do vendedor em lavrar a escritura.",
        },
      ],
    },
    {
      question: "Existem custos para realizar esse processo?",
      answers: [
        {
          content:
            "Sim, durante o deverá procesimento Judicial deverá haver o pagamento de custas judiciais do processo, o pagamento do imposto de transmissão (ITBI), além das custas e emolumentos para registro da sentença na matrícula.",
        },
        {
          content:
            "Além disso, haverá o pagamento dos honorários advocatícios, visto que o procedimento precisará de advogado especialista para conduzir o caso.",
        },
        {
          content:
            "No procesimento Extrajudicial: para fazer por meio extrajudicial deverão ser pagos custas e emolumentos da ata notarial pelo tabelionato de notas, pagamento do imposto de transmissão (ITBI), além das custas e emolumentos para registro da adjudicação na matrícula.",
        },
        {
          content:
            "Além disso, haverá honorários advocatícios, visto que o procedimento precisará de advogado especialista para conduzir o caso.",
        },
      ],
    },
  ];
  return (
    <section className="py-14 px-6">
      <Container className="">
        <div className="text-center">
          <h3 className="text-primary mb-2 text-sm tracking-[0.5em]">FAQ</h3>
          <h1 className="text-[2.1em]">
            Perguntas <span className="text-primary">Frenquentes</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="container mx-auto flex flex-col gap-4">
            <div className="bg-orange-500 p-5 rounded-lg w-full my-5">
              <h2 className="text-white text-center">Auditoria Imobiliária</h2>
            </div>
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
          <div className="container mx-auto flex flex-col gap-4">
            <div className="bg-orange-500 p-5 rounded-lg w-full my-5">
              <h2 className="text-white text-center">Regulação de Imoveis</h2>
            </div>
            {faqs2.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
          <div className="container mx-auto flex flex-col gap-4">
            <div className="bg-orange-500 p-5 rounded-lg my-5 w-full">
              <h2 className="text-white text-center">
                Adjudicação Compulsória
              </h2>
            </div>
            {faqs3.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
