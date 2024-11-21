import Link from "next/link";
import { heroContent } from "@/data/hero.content";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-10">
      <div className="max-w-screen-xl mx-auto gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
        <article className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            {heroContent.title}
          </h2>
          <h3 className="text-lg font-semibold">{heroContent.subtitle}</h3>
          <p className="text-justify">{heroContent.info}</p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              href="/services"
              className="block py-2 px-4 text-white text-center font-medium bg-yellow-600 duration-150 hover:bg-yellow-500 active:bg-yellow-700 rounded-lg shadow-lg hover:shadow-none"
            >
              {heroContent.button1.title}
            </Link>
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-x-2 py-2 px-4 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg"
            >
              {heroContent.button2.title}
              <heroContent.button2.icon size={23} />
            </Link>
          </div>
        </article>
        <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
          <Image
            src="https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
            className="rounded-md md:rounded-tl-[108px]"
            alt="Servicios informáticos gestionados"
            width={162}
            height={162}
          />
        </div>
      </div>
      <footer className="mt-14 px-4 md:px-8">
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

export default Hero;
