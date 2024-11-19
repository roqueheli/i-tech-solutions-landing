import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "../Menu";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center w-full p-2 mb-2 border-black-200">
        <Link className="w-1/4 px-3 border-black-200" href="/">
          <Image
            src="/it-logo.png"
            alt="I-Tech logomark"
            width={50}
            height={50}
          />
        </Link>
        <div className="w-1/2 p-2 border border-gray-300 rounded-full">
          <Menu />
        </div>
        <Link
          className="w-1/4 flex justify-end"
          href="/jobs-list"
        >
          <p className="rounded-full hover:bg-gray-200 p-2">Únete a I-Tech</p>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
