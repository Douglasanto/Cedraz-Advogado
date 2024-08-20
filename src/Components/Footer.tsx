import Image from "next/image";
import Logo from "../assets/Marca principal branca.png";
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="bg-second text-white py-14 px-6">
      <div className="flex justify-between items-center py-10 lg:justify-around">
        <Image className="w-[150px] h-[150px]" src={Logo} alt="logo" />
        <div className="grid grid-cols-2 gap-8 mt-8 mb-4 sm:flex">
          <div className="rounded-full p-2">
            <a
              href="https://api.whatsapp.com/send/?phone=5571999061414&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={50} />
            </a>
          </div>
          <div className="rounded-full p-2">
            <a
              href="https://www.instagram.com/jcedrazadvocacia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={50} />
            </a>
          </div>
        </div>
        <h2 className="text-base">
          Site Desenvolvido por {""}
          <a
            href="https://www.linkedin.com/in/douglassanto/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Douglas Santo
          </a>
        </h2>
      </div>
    </footer>
  );
}
