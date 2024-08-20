import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  description: string;
  className?: string;
  src: StaticImageData;
  alt: string;
};

export function Cards({ text, description, src, alt, className }: Props) {
  const defaultClass = "md:top-[-3.8rem] md:block md:right-14";
  const combinedClass = twMerge(defaultClass, className);
  return (
    <div className="w-[280px] h-auto lg:w-[400px] xl:w-[550px] bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 border border-gray-100 p-6 relative hover:scale-105 transition ease-linear duration-500">
      <div className={combinedClass}>
        <Image className="w-[60px] h-[60px]" src={src} alt={alt} />
      </div>
      <div className="w-full h-full p-3 flex gap-4 content-center items-start flex-wrap">
        <div className="mt-2 text-primary font-myriadBold font-black sm:text-[1.3em] uppercase">
          {text}
        </div>
        <div className="mt-2 text-black">{description}</div>
      </div>
    </div>
  );
}
