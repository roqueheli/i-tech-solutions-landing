import { technologiesContent } from "@/data/technologies.content";
import TechCard from "./TechCard";

const Technologies = () => {
  return (
    <section className="flex items-center justify-center mb-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold sm:text-4xl">
            {technologiesContent.title}
          </h3>
          <p className="mt-3">{technologiesContent.info}</p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {technologiesContent.technologies.map((tech, idx) => (
            <TechCard
              key={idx}
              icon={tech.icon}
              name={tech.name}
              type={tech.type}
              description={tech.description}
              link={tech.link}
              highlight={tech.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
