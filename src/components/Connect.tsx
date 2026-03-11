import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "nikhilmahato2104@gmail.com"; // replace with your email
const AVATAR = "/profile.png";       // replace with your avatar path

const Connect: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="py-16 px-4">
      <h2 className="text-pureBlack text-center dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-2xl mb-10">
        Connect
      </h2>

      {/* Centered card */}
      <div className="flex justify-center">
        <a
          href={`mailto:${EMAIL}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="group flex flex-col items-center gap-5 rounded-2xl border border-gray-100 dark:border-neutral-800 px-12 py-10 w-full max-w-xl cursor-pointer"
          style={{
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
            boxShadow: hovered
              ? "0 12px 40px 0 rgba(0,0,0,0.08)"
              : "0 2px 8px 0 rgba(0,0,0,0.03)",
            transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full overflow-hidden ring-1 ring-gray-100 dark:ring-neutral-800">
            <img
              src={AVATAR}
              alt="Nikhil Mahato"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name + role */}
          <div className="text-center">
            <p className="font-sans font-semibold text-base text-pureBlack dark:text-pureWhite leading-5">
              Nikhil Mahato
            </p>
            <p className="font-mono text-xs text-gray-400 dark:text-neutral-500 mt-1">
              Full-stack Developer & DevOps
            </p>
          </div>

          {/* Email pill */}
          <div
            className="flex items-center gap-1.5 rounded-full border border-gray-100 dark:border-neutral-800 px-4 py-2"
            style={{
              background: hovered ? "rgba(0,0,0,0.03)" : "transparent",
              transition: "background 0.2s",
            }}
          >
            <span className="font-mono text-xs text-pureBlack dark:text-pureWhite">
              {EMAIL}
            </span>
            <div
              style={{
                transform: hovered ? "translate(2px,-2px)" : "translate(0,0)",
                transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <ArrowUpRight
                className="w-3 h-3 text-gray-400 dark:text-neutral-500 group-hover:text-pureBlack dark:group-hover:text-pureWhite"
                style={{ transition: "color 0.2s" }}
              />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Connect;