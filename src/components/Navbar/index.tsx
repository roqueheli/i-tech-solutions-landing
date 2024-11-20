import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "../HamburgerMenu";
import Menu from "../Menu";

const LINKS = [
  { title: "Inicio", href: "/" },
  { title: "IT Services", href: "/it-services" },
  { title: "Outsourcing", href: "/outsourcing" },
  { title: "Contacto", href: "/contact" },
];

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="sm:mt-0 mt-40 w-full">
      <nav className="flex justify-between items-center w-full p-2 mb-2 border-black-200">
        {/* Logo */}
        <Link className="sm:hidden md:block w-1/4 px-3" href="/">
          <Image
            className="hidden md:block transition duration-150 ease-in-out hover:ease-in"
            src="/it-logo.png"
            alt="I-Tech logomark"
            width={45}
            height={45}
          />
          <Image
            className="md:hidden transition duration-150 ease-in-out hover:ease-in"
            src="/it-logo-gold.png"
            alt="I-Tech logomark"
            width={200}
            height={200}
          />
        </Link>

        {/* Menu */}
        <div className="sm:flex hidden items-center md:w-1/2 w-full justify-center p-2 border border-gray-300 rounded-full relative">
          <Menu options={LINKS} />
        </div>

        {/* Join I-Tech */}
        <Link className="hidden md:flex w-1/4 justify-end" href="/jobs-list">
          <p className="rounded-full hover:bg-gray-200 p-3 text-blue-500 transition duration-150 ease-out hover:ease-in">
            Únete a I-Tech
          </p>
        </Link>

        {/* Menú hamburguesa */}
        <HamburgerMenu options={LINKS} />
      </nav>
    </header>
  );
};

export default Navbar;
