import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const clients = [
  {
    title: "Feelz Films",
    category: "Frontend Development",
    link: "https://www.feelzfilms.com/",
    thumbnail: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1773249978/Screenshot_2026-03-11_at_10.53.38_PM_c03ruz.png",
  },
  {
    title: "DigiUdaan Solution",
    category: "Frontend Development",
    link: "https://www.digiudaansolution.in/",
    thumbnail: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1773249984/Screenshot_2026-03-11_at_10.53.49_PM_kny9xb.png",
  },
  {
    title: "FMA Gym",
    category: "UI/UX & Development",
    link: "https://www.fmagym.com/",
    thumbnail: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1773249976/Screenshot_2026-03-11_at_10.54.00_PM_j0apia.png",
  },
  {
    title: "DestinyEuro",
    category: "UI/UX & Development",
    link: "https://www.destinyeuro.com/",
    thumbnail: "https://res.cloudinary.com/dynbpb9u0/image/upload/v1773249978/Screenshot_2026-03-11_at_10.54.20_PM_fnfjjj.png",
  },
];

const ClientRow: React.FC<{
  client: (typeof clients)[0];
  index: number;
}> = ({ client, index }) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const rowRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      ref={rowRef}
      href={client.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className="group relative flex items-center justify-between py-5 border-b border-gray-100 dark:border-neutral-800 cursor-pointer overflow-visible"
      style={{
        transform: hovered ? "translateX(6px)" : "translateX(0)",
        transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Floating thumbnail */}
      <div
        className="pointer-events-none absolute z-50 rounded-xl overflow-hidden shadow-2xl"
        style={{
          width: 180,
          height: 110,
          left: mousePos.x + 20,
          top: mousePos.y - 55,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "scale(1) translateY(0px)" : "scale(0.88) translateY(8px)",
          transition: "opacity 0.2s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Fallback gradient placeholder when image is missing */}
        <div
          className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center"
        >
          <img
            src={client.thumbnail}
            alt={client.title}
            className="w-full h-full object-fit"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* <span className="absolute font-mono text-xs text-gray-400 dark:text-neutral-500 select-none">
            {client.title}
          </span> */}
        </div>
      </div>

      {/* Left: index + title */}
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-xs text-gray-300 dark:text-neutral-600 select-none w-5 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
          <h3
            className="font-sans font-semibold text-2xl md:text-3xl leading-tight tracking-tight text-pureBlack opacity-75  dark:text-pureWhite"
            style={{
              letterSpacing: hovered ? "0.01em" : "0",
              transition: "letter-spacing 0.25s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {client.title}
          </h3>
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
          style={{ transition: "color 0.2s, transform 0.25s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </div>
    </a>
  );
};

const ClientWorks: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <h2 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-xl mb-6">
        Client Works
      </h2>
      <div className="flex flex-col">
        {clients.map((client, idx) => (
          <ClientRow key={idx} client={client} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default ClientWorks;