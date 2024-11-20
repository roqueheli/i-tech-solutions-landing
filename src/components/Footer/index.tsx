import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const footerNavs = {
  links: [
    {
      href: "javascript:void()",
      name: "Terminos",
    },
    {
      href: "javascript:void()",
      name: "Licencia",
    },
    {
      href: "javascript:void()",
      name: "Privacidad",
    },
    {
      href: "javascript:void()",
      name: "Sobre nosotros",
    },
  ],
  rrss: [
    {
      href: "javascript:void()",
      name: "Linkedin",
      icon: FaLinkedin,
    },
    {
      href: "javascript:void()",
      name: "Github",
      icon: FaGithub,
    },
    {
      href: "javascript:void()",
      name: "Instagram",
      icon: FaInstagram,
    },
    {
      href: "javascript:void()",
      name: "Facebook",
      icon: FaFacebook,
    },
  ],
};

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full">
      <div className="w-full mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <Image
              src="/it-logo-gold.png"
              alt="i-tech-logo-footer"
              width={162}
              height={162}
            />
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.links?.map((item, idx) => (
                <li
                  key={`footer-links-${idx}`}
                  className="text-gray-800 hover:text-gray-500 duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:mt-0 sm:mt-0 xs:mt-5">
            <p className="text-gray-700 font-semibold">Síguenos en nuestras redes</p>
            <div className="flex items-center gap-3 mt-5 sm:block">
              <ul className="flex flex-wrap items-center gap-9 text-sm sm:text-base">
                {footerNavs.rrss?.map((item, idx) => (
                  <li
                    key={`footer-rrss-${idx}`}
                    className="text-gray-500 hover:text-blue-400 duration-150"
                  >
                    <Link href={item.href}>
                      <item.icon size={25} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2022 I-Tech Solutions Inc. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
