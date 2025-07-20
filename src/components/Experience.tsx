


const experiences = [
  {
    date: "Jan, 2024 - Nov, 2024",
    company: "Savera Infotech",
    role: "Frontend Developer",
    description:
      "Built responsive user interfaces using JavaScript, HTML, and CSS. Collaborated with designers to deliver pixel-perfect layouts and optimized web performance.",
  },
  {
    date: "Dec, 2024 - June, 2025",
    company: "QuadBtech",
    role: "Web3 Developer",
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
