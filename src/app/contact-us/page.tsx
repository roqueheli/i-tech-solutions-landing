import ContactUsForm from "@/components/Form";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

type Props = {};

const ContactUs = (props: Props) => {
  const contactMethods = [
    {
      icon: FiMail,
      contact: "contact-ust@i-tech.com",
    },
    {
      icon: FiPhone,
      contact: "+56 9 8817 1640",
    },
    {
      icon: TfiLocationPin,
      contact: "San Isidro 73, Of. 1113, Santiago, Chile.",
    },
  ];

  return (
    <main className="py-14 w-full mb-10">
      <div className="max-w-screen-xl w-full mx-auto px-4 md:px-8">
        <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
          <div className="max-w-lg space-y-3">
            <h3 className="text-yellow-600 font-semibold">Contact</h3>
            <p className="text-3xl font-semibold sm:text-4xl">
              ¿Cómo podemos ayudarte?
            </p>
            <p className="text-justify">
              Estamos aquí para ayudarle y responder a cualquier pregunta que
              puedas tener. Rellene el formulario o utilice la información de
              contacto que aparece a continuación.
            </p>
            <div>
              <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                {contactMethods.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-x-3">
                    <div className="flex-none "><item.icon size={20} /></div>
                    <p>{item.contact}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 mt-9 sm:max-w-lg lg:max-w-md">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactUs;
