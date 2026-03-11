import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "ComfySquare",
    tech: "React · Node · Express · Redux  ",
    link: "https://comfysquare.netlify.app/",
  },
  {
    title: "Invoice System",
    tech: "Node ·  Express · Docker · Redis",
    link: "https://github.com/nikhilmahato21/invoice-app",
  },
  {
    title: "TeamSync",
    tech: "React · Express · Node",
    link: "https://teamsyncdev.vercel.app/",
  }
  
];

const ProjectRow: React.FC<{
  project: (typeof projects)[0];
  index: number;
}> = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex items-center justify-between py-5 border-b border-gray-100 dark:border-neutral-800 cursor-pointer transition-all duration-200"
      style={{
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Left: index + title + tech */}
      <div className="flex items-baseline gap-4">
        <span
          className="font-mono text-xs text-gray-300 dark:text-neutral-600 select-none w-5 shrink-0"
          style={{ transition: "color 0.2s" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3
            className="font-sans font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-pureBlack dark:text-pureWhite"
            style={{
              transition: "letter-spacing 0.25s cubic-bezier(0.4,0,0.2,1)",
              letterSpacing: hovered ? "0.01em" : "0",
            }}
          >
            {project.title}
          </h3>
          <p
            className="font-mono text-xs mt-0.5 text-gray-400 dark:text-neutral-500"
            style={{
              opacity: hovered ? 1 : 0.7,
              transition: "opacity 0.2s",
            }}
          >
            {project.tech}
          </p>
        </div>
      </div>

      {/* Right: arrow */}
      <div
        className="shrink-0 ml-4"
        style={{
          transform: hovered ? "translate(3px, -3px)" : "translate(0, 0)",
          transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <ArrowUpRight
          className="w-5 h-5 text-gray-300 dark:text-neutral-600 group-hover:text-pureBlack dark:group-hover:text-pureWhite"
          style={{ transition: "color 0.2s" }}
        />
      </div>
    </a>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-xl mb-6">
        Projects
      </h2>
      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <ProjectRow key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;