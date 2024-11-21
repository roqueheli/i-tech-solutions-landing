import { aboutUsContent } from "@/data/about-us.content";

const AboutUs = () => {
  return (
    <section className="flex items-center justify-center mb-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl text-center mb-14">
          {aboutUsContent.title}
        </h2>
        <p className="mt-6 text-lg text-justify">
          En{" "}
          <span className="font-semibold text-yellow-500">
            {aboutUsContent.intro.highlight}
          </span>
          , {aboutUsContent.intro.text.replace("{highlight}", "")}
        </p>
        {aboutUsContent.sections.map((section, index) => (
          <div key={index} className="mt-10">
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            {section.content && (
              <p className="mt-4 text-justify">{section.content}</p>
            )}
            {section.list && (
              <ul className="mt-4 space-y-3">
                {section.list.map((item, idx) => (
                  <li key={idx}>
                    • <span className="font-medium">{item.title}:</span>{" "}
                    {item.description}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="mt-10 text-center">
          <p className="text-lg">
            {/* Dividir el texto del cierre en partes */}
            {aboutUsContent.closing.split("{highlight}")[0]}
            <span className="font-semibold text-yellow-500">
              {aboutUsContent.closingHighlight}
            </span>
            {aboutUsContent.closing.split("{highlight}")[1]}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
