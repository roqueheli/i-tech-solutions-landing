import { BiSupport } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { SiGotomeeting, SiIbm } from "react-icons/si";

type Props = {};

const ServicesPage = (props: Props) => {
  const features = [
    {
      icon: GrTechnology,
      title: "Operaciones TI (IT Ops)",
      desc: "Garantiza, mantiene y gestiona el óptimo rendimiento de la operación de la plataforma IBM I, brindando continuidad al negocio sin interrupciones imprevistas.",
    },
    {
      icon: MdOutlineMonitorHeart,
      title: "Observabilidad y monitoreo TI",
      desc: "Gestiona y escala proactivamente las alertas de la solución end to end, tomando decisiones con datos estadísticos y con apoyo de procesos automatizados, activando los protocolos definidos; anticipando caídas de los servicios e incidentes operacionales.",
    },
    {
      icon: FiUsers,
      title: "Staff de desarrolladores",
      desc: "Ofrecemos soluciones integrales para el desarrollo de software personalizado, enfocados en garantizar la calidad y adaptabilidad a las necesidades específicas de nuestros clientes, mejorando la eficiencia y productividad del negocio.",
    },
    {
      icon: SiIbm,
      title: "Administración de Infraestructura IBM I",
      desc: "Administra e implementa los más altos estándares y mejores prácticas en las configuraciones de la plataforma IBM I y sus sistemas periféricos, asegurando la operatividad con procesos 100% eficientes y confiables.",
    },
    {
      icon: SiGotomeeting,
      title: "Consultorías especializadas",
      desc: "Análisis y generación de diagnósticos multidimensionales precisos, que facilitan la resolución de problemas y orientan hacia la solución óptima en áreas clave de la plataforma, como seguridad, rendimiento, arquitecturas y performance.",
    },
    {
      icon: BiSupport,
      title: "Soporte especializado",
      desc: "Ofrecemos soporte integral para la plataforma y las aplicaciones, lo que agrega un valor importante al identificar y resolver problemas rápidamente. Nuestros especialistas también están disponibles para participar activamente en mesas de trabajo, ofreciendo soluciones y propuestas cuando sea necesario.",
    },
  ];

  return (
    <section className="flex items-center justify-center mb-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold sm:text-4xl">
              Nuestros servicios
            </h3>
            <p className="mt-3 text-center">
              En I-Tech Soluciones, brindamos una amplia variedad de servicios
              enfocados en mejorar el rendimiento, la seguridad y la eficiencia
              de tus plataformas y aplicaciones.
            </p>
          </div>
        </div>
        <div className="relative mt-12 mb-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={`services-${idx}`}
                className="text-justify space-y-3 p-4 border rounded-lg"
              >
                <div className="text-yellow-600 pb-3">
                  <item.icon size={21} />
                </div>
                <h4 className="text-lg font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
