"use client";
import { LinkType } from "@/types/link.types";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type NavbarProps = {
  options: LinkType[];
};

const Navbar = ({ options }: NavbarProps) => {
  const searchParams = useSearchParams();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const type = searchParams.get("type");
    setSelectedOption(type || "");
  }, [searchParams]);

  return (
    <ul className="flex justify-between items-center w-full px-4">
      {/* Logo inside menu for smaller screens */}
      <li className="md:hidden items-center p-1 flex-shrink-0">
        <Link href="/">
          <Image
            className="md:hidden transition duration-150 ease-in-out hover:ease-in object-contain"
            src="/it-logo.png"
            alt="iTech logomark"
            width={40}
            height={40}
          />
        </Link>
      </li>

      {/* Navigation links */}
      {options &&
        options.map((link, index) => {
          // Condicional para ajustar el href
          const linkHref =
            link.href === ""
              ? "/" // No agregar ?type= para la página de inicio
              : `/${link.href}?type=${link.href}`;

          return (
            <li
              key={`link-menu-${index}`}
              className={`text-md p-1 rounded-full transition-all duration-700 ease-in-out ${
                isClient && selectedOption === link.href
                  ? "bg-black text-white" // Clase activa
                  : "hover:bg-gray-200"
              }`}
            >
              <Link
                className="block px-4 py-2 text-center whitespace-nowrap truncate"
                href={linkHref}
                onClick={() => setSelectedOption(link.href)}
              >
                {link.title}
              </Link>
            </li>
          );
        })}

      {/* Join iTech inside menu */}
      <li className="md:hidden p-1 flex-shrink-0">
        <Link href="/jobs-list?type=jobs-list">
          <p className="text-md rounded-full bg-black p-3 text-white hover:text-yellow-200 transition duration-150 ease-in-out text-center whitespace-nowrap">
            Únete a iTech
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
