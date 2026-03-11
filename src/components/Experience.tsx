


const experiences = [
  {
  date: "June, 2025 - Present",
  company: "Savera Infotech",
  role: "FullStack Developer",
  description:
    "Build and ship scalable production-ready features across the full stack, developing performant frontends and robust backend APIs. Ensure high code quality, system reliability, and efficient data handling while contributing to product architecture and performance optimization."
},
  {
    date: "Dec, 2024 - June, 2025",
    company: "QuadBtech",
    role: "FullStack Developer",
    description:
     "Developed the customer-facing functionality and UX for a 3-sided Web3 platform (Customer, Retailer, Seller), implementing role-based authentication, integrating Rust-based APIs, and managing global state with Redux.",
  },
];

const Experience = () => {
  return (
    <section className="p-4">
      <h2 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5 text-xl mb-6">
        Experience
      </h2>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-6 md:grid md:grid-cols-[150px_1fr] md:gap-4"
        >
          {/* Date */}
          <p className="text-pureBlack text-sm dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5 mb-2 md:mb-0">
            {exp.date}
          </p>

          {/* Company, role, and description on the right */}
          <div>
            <p className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5">
              {exp.company} | {exp.role}
            </p>
            <p className="text-pureBlack dark:text-pureWhite font-sans font-normal  tracking-[0.023] leading-5 mt-1">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
