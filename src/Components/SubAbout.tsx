import { InfiniteCards } from "./layout/InfiniteCards";
import ImageT from "@/assets/Icon-001.webp";

export function SubAbout() {
  const items = [
    {
      quote:
        "Este é o início da nossa jornada juntos! No primeiro contato, você pode nos contar sobre suas necessidades e expectativas. Estamos aqui para ouvir e entender como podemos ajudá-lo da melhor maneira possível.",
      name: "Primeiro Contato",
      src: ImageT,
      alt: "ImageT",
    },
    {
      quote:
        "Após o primeiro contato, agendaremos uma entrevista de triagem para aprofundar a compreensão sobre sua necessidade. Durante essa etapa, faremos perguntas específicas para entender melhor seus desafios e determinar a melhor abordagem para resolver seus problemas.",
      name: "Entrevista de Triagem",
      src: ImageT,
      alt: "ImageT",
    },
    {
      quote:
        "Em seguida, agendaremos uma reunião virtual com um de nossos assessores jurídicos especializados. Nessa etapa, você terá a oportunidade de discutir detalhes mais técnicos e específicos do seu caso, recebendo orientações valiosas sobre o caminho a ser seguido.",
      name: "Reunião Virtual",
      src: ImageT,
      alt: "ImageT",
    },
    {
      quote:
        "Após a reunião com o assessor jurídico e esclarecimento de todas as dúvidas, se decidir avançar, iremos proceder com a contratação dos nossos serviços de assessoria. Faremos todo o processo de formalização para garantir que você esteja amparado por nossa equipe especializada.",
      name: "Contratação",
      src: ImageT,
      alt: "ImageT",
    },
    {
      quote:
        "Com a contratação concluída, nosso especialista designado acompanhará de perto o desenvolvimento do seu caso. Estaremos sempre disponíveis para fornecer atualizações, esclarecer dúvidas e ajustar estratégias, conforme necessário.",
      name: "Acompanhamento do Caso pelo Especialista",
      src: ImageT,
      alt: "ImageT",
    },
    {
      quote:
        "Finalmente, chegaremos à conclusão do serviço, onde garantiremos que todas as suas necessidades tenham sido atendidas de forma satisfatória. Nosso objetivo é garantir sua plena satisfação e resolver seu problema da melhor maneira possível.",
      name: "Conclusão do Serviço",
      src: ImageT,
      alt: "ImageT",
    },
  ];
  return (
    <div className="pt-12 h-[80vh] xl:h-[65vh] flex flex-col items-center lg:flex-row lg:items-start">
      <div>
        <h3 className="text-primary text-sm mb-2 tracking-[0.5em] text-center lg:text-start">
          DIFERENCIAIS
        </h3>
        <p className="text-white text-[1.7em] text-center lg:text-start">
          Como Funciona a{" "}
          <span className="text-primary">Assessoria on-line?</span>
        </p>
      </div>

      <InfiniteCards items={items} speed="normal" />
    </div>
  );
}
