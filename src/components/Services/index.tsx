import React from "react";
import { servicesContent } from "@/data/servicesContent";

type Props = {};

const index = (props: Props) => {
  return (
    <section className="flex items-center justify-center mb-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold sm:text-4xl">
              Nuestros servicios
            </h3>
            <p className="mt-3 text-center">
              En iTech Soluciones, brindamos una amplia variedad de servicios
              enfocados en mejorar el rendimiento, la seguridad y la eficiencia
              de tus plataformas y aplicaciones.
            </p>
          </div>
        </div>
        <div className="relative mt-12 mb-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesContent.map((item, idx) => (
              <li
                key={`services-${idx}`}
                className="text-justify space-y-3 p-4 border rounded-lg"
              >
                <div className="text-yellow-600 pb-3">
                  <item.icon size={21} />
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default index;
