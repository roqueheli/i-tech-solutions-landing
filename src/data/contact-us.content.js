import { FiMail, FiPhone } from "react-icons/fi";
import { TfiLocationPin } from "react-icons/tfi";

export const contactContent = {
  title: "¿Cómo podemos ayudarte?",
  intro:
    "Estamos aquí para ayudarle y responder a cualquier pregunta que puedas tener. Rellene el formulario o utilice la información de contacto que aparece a continuación.",
  contactMethods: [
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
  ],
};
