import { AiOutlineHome } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { MdOutlineHub, MdOutlinePermContactCalendar } from "react-icons/md";

export const headerContent = [
  { title: "Inicio", href: "/", icon: AiOutlineHome },
  { title: "IT Services", href: "/services", icon: GrServices },
  { title: "Tecnologías", href: "/technologies", icon: MdOutlineHub },
  {
    title: "¿Quiénes somos?",
    href: "/about-us",
    icon: MdOutlinePermContactCalendar,
  },
  {
    title: "Contacto",
    href: "/contact-us",
    icon: MdOutlinePermContactCalendar,
  },
];
