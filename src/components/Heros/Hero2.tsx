"use client";
import { heroContent, heroContent2 } from "@/data/heroContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeroProps = {};

const Hero2 = (props: HeroProps) => {
  const [isVideoPoppedUp, setVideoPopUp] = useState(false);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 md:px-8 xl:flex">
        <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">
          <h1 className="text-4xl font-extrabold mx-auto md:text-5xl">
            {heroContent2.title}
          </h1>
          <p className="max-w-xl mx-auto xl:mx-0">{heroContent2.info}</p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <Link
              href={heroContent2.button1.href}
              className="button-primary flex items-center justify-center gap-x-2 py-2 px-4 font-medium duration-150 hover:bg-yellow-700 active:bg-yellow-900 rounded-lg md:inline-flex"
            >
              {heroContent2.button1.title}
            </Link>
            <Link
              href={heroContent2.button2.href}
              className="flex items-center justify-center gap-x-2 py-2 px-4 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
            >
              {heroContent2.button2.title}
              <heroContent2.button2.icon size={23} />
            </Link>
          </div>
        </div>
        <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
            <button
              className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-yellow-500 hover:bg-yellow-600 ring-offset-2 focus:ring text-white"
              onClick={() => setVideoPopUp(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6 m-auto"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isVideoPoppedUp ? (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 w-full h-full bg-black/50"
            onClick={() => setVideoPopUp(false)}
          ></div>
          <div className="px-4 relative">
            <button
              className="w-12 h-12 mb-5 rounded-full duration-150 hover:bg-yellow-700 text-white"
              onClick={() => setVideoPopUp(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 m-auto"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
            <video
              className="rounded-lg w-full max-w-2xl"
              controls
              autoPlay={true}
            >
              <source
                src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ) : (
        ""
      )}
            <footer className="px-4 md:px-8">
        <p className="text-center text-sm font-semibold">
          Confiado por empresas líderes
        </p>
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6">
          {/* Logos o íconos representativos */}
          {heroContent.trusted.map((trusted, index) => (
            <div
              key={`trusted-${index}`}
              className="w-24 h-12 flex items-center justify-center rounded"
            >
              <Image
                className="transition duration-150 ease-in-out hover:ease-in object-contain"
                src={trusted.logo}
                alt={trusted.name}
                width={120}
                height={120}
              />
              {/* {trusted.logo} */}
            </div>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Hero2;
