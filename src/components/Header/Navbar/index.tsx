import { LinkType } from "@/types/link.types";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

type NavbarProps = {
  options: LinkType[];
};

const Navbar = ({ options }: NavbarProps) => {
  return (
    <ul className="flex justify-between items-center w-full px-4">
      {/* Logo inside menu for smaller screens */}
      <li className="md:hidden items-center p-1 flex-shrink-0">
        <Link href="/">
          <Image
            className="md:hidden transition duration-150 ease-in-out hover:ease-in object-contain"
            src="/it-logo.png"
            alt="I-Tech logomark"
            width={40}
            height={40}
          />
        </Link>
      </li>

      {/* Navigation links */}
      {options &&
        options.map((link, index) => (
          <li
            key={`link-menu-${index}`}
            className="text-md hover:bg-gray-200 hover:text-lg p-1 rounded-full transition duration-150 ease-in-out"
          >
            <Link
              className="block px-4 py-2 text-center whitespace-nowrap truncate"
              href={link.href}
            >
              {link.title}
            </Link>
          </li>
        ))}

      {/* Join I-Tech inside menu */}
      <li className="md:hidden p-1 flex-shrink-0">
        <Link href="/jobs-list">
          <p className="text-md rounded-full bg-black p-3 text-white hover:text-yellow-200 transition duration-150 ease-in-out text-center whitespace-nowrap">
            Únete a I-Tech
          </p>
        </Link>
      </li>
      <li className="md:hidden p-1 flex-shrink-0">
        <ThemeToggle />
      </li>
    </ul>
  );
};

export default Navbar;
