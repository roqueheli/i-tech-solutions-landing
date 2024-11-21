import {
  FaNodeJs,
  FaReact,
  FaAws,
  FaJava,
  FaDatabase,
  FaJs,
} from "react-icons/fa";

export const technologiesContent = {
  title: "Nuestro stack de tecnologías",
  info:
    "En iTech Solutions, aprovechamos las tecnologías de vanguardia para ofrecer soluciones de primera categoría. Estas son las herramientas y plataformas en las que nos especializamos.",
  technologies: [
    {
      name: "React",
      type: "Frontend Framework",
      description: "A JavaScript library for building user interfaces.",
      icon: FaReact,
      link: "https://reactjs.org/",
      highlight: "Más información",
    },
    {
      name: "Node.js",
      type: "Backend Runtime",
      description:
        "A runtime environment for executing JavaScript code on the server.",
      icon: FaNodeJs,
      link: "https://nodejs.org/",
      highlight: "Sitio oficial",
    },
    {
      name: "JavaScript",
      type: "Programming Language",
      description:
        "A versatile programming language primarily used for web development.",
      icon: FaJs,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      highlight: "Documentación",
    },
    {
      name: "AWS",
      type: "Cloud Platform",
      description:
        "A comprehensive cloud platform offering a wide range of services.",
      icon: FaAws,
      link: "https://aws.amazon.com/",
      highlight: "Explorar AWS",
    },
    {
      name: "IBM i",
      type: "Operating System",
      description:
        "A highly secure operating system used in enterprise-level computing.",
      icon: FaDatabase,
      link: "https://www.ibm.com/it-infrastructure/power/os/ibm-i",
      highlight: "Más información",
    },
    {
      name: "Java",
      type: "Programming Language",
      description:
        "A popular, object-oriented programming language used across platforms.",
      icon: FaJava,
      link: "https://www.oracle.com/java/",
      highlight: "Sitio oficial",
    },
    {
      name: "MySQL",
      type: "Database Management",
      description:
        "A widely-used open-source relational database management system.",
      icon: FaDatabase,
      link: "https://www.mysql.com/",
      highlight: "Documentación",
    },
  ],
};
