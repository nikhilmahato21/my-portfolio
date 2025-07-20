import React from "react";
import { ExternalLink } from "lucide-react"; // optional icon (install lucide-react)

const projects = [
  {
    title: "Tailwind CSS Animations",
    tech: "Next Js",
    img: "/images/tailwind-animations.png",
    link: "#",
  },
  {
    title: "DesignDex",
    tech: "Next Js, Supabase",
    img: "/images/designdex.png",
    link: "#",
  },
  {
    title: "SolveAlgo",
    tech: "Next Js",
    img: "/images/solvealgo.png",
    link: "#",
  },
  {
    title: "Certificate Hub",
    tech: "Next Js & Supabase",
    img: "/images/certificate-hub.png",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-xl mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative group rounded-2xl overflow-hidden   hover:scale-[1.02] transition-transform"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-56 object-cover md:h-64"
            />
            <div className="p-4 flex justify-between items-start">
              <div >
                <h3 className="font-semibold font-sans text-lg text-pureBlack dark:text-pureWhite leading-5 ">{project.title}</h3>
                <p className="text-pureBlack text-sm dark:text-pureWhite font-mono  font-medium tracking-[0.023] leading-5 mt-1 ">{project.tech}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
