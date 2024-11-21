"use client";
import { LinkType } from "@/types/link.types";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { TbUsersGroup } from "react-icons/tb";

type HamburguerMenuProps = {
  options: LinkType[];
};

const HamburgerMenu: FC<HamburguerMenuProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 854) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup para evitar memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {/* Botón de menú hamburguesa */}
      <button
        onClick={toggleSidebar}
        className="block sm:hidden p-2 text-gray-800"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-200 shadow-lg transition-transform transform duration-1000 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-2/4 sm:hidden md:hidden z-50`}
      >
        {/* Botón de cerrar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 p-2 text-gray-800"
        >
          <AiOutlineClose size={24} />
        </button>

        {/* Contenido del sidebar */}
        <nav className="p-4 mt-12 space-y-4">
          {options &&
            options.map((option, index) => (
              <Link onClick={toggleSidebar}
                key={`link-menu-${index}`}
                href={option.href}
                className="flex items-center ml-3 text-left block py-2 hover:text-blue-500"
              >
                <option.icon className="mr-3" size={20} />
                {option.title}
              </Link>
            ))}
          <Link onClick={toggleSidebar}
            href="/jobs-list"
            className="flex ml-3 text-left block py-2 text-blue-500"
          >
            <TbUsersGroup className="mr-3" size={20} />
            Únete a iTech
          </Link>
        </nav>
      </div>

      {/* Fondo oscuro al abrir el sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default HamburgerMenu;
