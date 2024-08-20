export function Carousel() {
  const phrases = [
    " ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ",
    "▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA▪",
    " ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ",
    "▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA ▪ ASSESSORIA JURÍDICA▪",
  ];
  return (
    <div className="w-full h-12 overflow-hidden bg-Carosel flex items-center border-y">
      <div className="w-full flex flex-nowrap">
        <ul className="flex justify-center md:justify-start space-x-4 animate-infinite-scroll text-white">
          {phrases.map((phrase, index) => (
            <li className="text-xl whitespace-nowrap" key={index}>
              <span>{phrase}</span>
            </li>
          ))}
        </ul>
        <ul
          className="flex justify-center md:justify-start space-x-4 animate-infinite-scroll text-white"
          aria-hidden="true"
        >
          {phrases.map((phrase, index) => (
            <li className="text-xl whitespace-nowrap ml-2" key={index}>
              <span>{phrase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
