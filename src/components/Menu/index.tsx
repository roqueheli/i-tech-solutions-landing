import Link from "next/link";
import React from "react";

const LINKS = [
  { title: "Inicio", href: "/" },
  { title: "IT Services", href: "/it-services" },
  { title: "Outsourcing", href: "/outsourcing" },
  { title: "Contacto", href: "/contact" },
];

type Props = {};

const Menu = (props: Props) => {
  return (
    <ul className="flex justify-between items-center w-full px-4 bg-color-white">
      {LINKS &&
        LINKS.map((link, index) => (
          <li
            key={`link-menu-${index}`}
            className="text-md hover:bg-gray-200 hover:text-lg p-1 rounded-full"
          >
            <Link className="w-full px-4 py-2" href={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Menu;
