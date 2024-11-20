"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LinkType } from "@/types/link.types";

type HamburgerMenuProps = {
  options: LinkType[];
};

const HamburgerMenu = ({ options }: HamburgerMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Botón del menú hamburguesa */}
      <button
        className="text-gray-700 mr-8 hover:text-gray-900 focus:outline-none sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-28 right-0 w-96 bg-gray-100 p-4 md:hidden sm:hidden">
          {options &&
            options.map((option, index) => (
              <Link
                key={`link-menu-${index}`}
                href={option.href}
                className="text-center block py-2 hover:text-blue-500"
              >
                {option.title}
              </Link>
            ))}
          <Link
            href="/jobs-list"
            className="text-center block py-2 text-blue-500"
          >
            Únete a I-Tech
          </Link>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
