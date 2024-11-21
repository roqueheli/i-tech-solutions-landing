import { AiOutlineHome } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { MdOutlineHub, MdOutlinePermContactCalendar } from "react-icons/md";

export const headerContent = [
  { title: "Inicio", href: "/", icon: AiOutlineHome },
  { title: "IT Services", href: "/services", icon: GrServices },
  { title: "Tecnologias", href: "/technologies", icon: MdOutlineHub },
  {
    title: "¿Quienes somos?",
    href: "/about-us",
    icon: MdOutlinePermContactCalendar,
  },
  {
    title: "Contacto",
    href: "/contact-us",
    icon: MdOutlinePermContactCalendar,
  },
];
