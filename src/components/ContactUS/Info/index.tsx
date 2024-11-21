import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

type Props = {};

const ContactUsInfo = (props: Props) => {
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
    <div className="max-w-lg space-y-3">
      <h3 className="text-yellow-600 font-semibold">Contact</h3>
      <p className="text-3xl font-semibold sm:text-4xl">
        ¿Cómo podemos ayudarte?
      </p>
      <p className="text-justify">
        Estamos aquí para ayudarle y responder a cualquier pregunta que puedas
        tener. Rellene el formulario o utilice la información de contacto que
        aparece a continuación.
      </p>
      <div>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
          {contactMethods.map((item, idx) => (
            <li key={idx} className="flex items-center gap-x-3">
              <div className="flex-none ">
                <item.icon size={20} />
              </div>
              <p>{item.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactUsInfo;
