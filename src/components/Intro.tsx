const Intro = () => {
  return (
    <section className="max-w-3xl p-4 text-left">
      {/* Heading */}
      <h2 className="text-lg font-bold font-sans mb-4">
        Building Scalable Applications from Code to Cloud
      </h2>

      {/* Paragraph 1 */}
      <p className="  font-sans font-thin leading-relaxed mb-3 text-neutralDark dark:text-neutralGray">
        I’m a passionate <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100 ">Full-Stack Developer</span> with experience
        in creating dynamic, high-performing applications. On the frontend, I
        specialize in{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100">React.js</span>, while for backend
        development I work with{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100 ">Node.js</span>,{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100">Java</span>, and{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100">JavaScript</span>.
      </p>

      {/* Paragraph 2 */}
      <p className="font-sans font-thin leading-relaxed mb-3 text-neutralDark dark:text-neutralGray">
  I work with{" "}
  <span className="font-semibold text-pureBlack dark:text-pureWhite font-mono">Docker</span> for containerization and{" "}
  <span className="font-semibold text-pureBlack dark:text-pureWhite font-mono">Kubernetes</span> for container orchestration.
  I build{" "}
  <span className="font-semibold text-pureBlack dark:text-pureWhite font-mono">CI/CD pipelines</span> to automate deployments and use{" "}
  <span className="font-semibold text-pureBlack dark:text-pureWhite font-mono">AWS (EC2, S3)</span>  for cloud infrastructure and scalability.
</p>


      {/* Paragraph 3 */}
      <p className="  font-sans font-thin leading-relaxed  text-neutralDark dark:text-neutralGray">
        Beyond coding, I focus on architecture and design principles, applying{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100">HLD</span> and{" "}
        <span className="font-semibold text-pureBlack dark:text-pureWhite  font-mono text-opacity-100">LLD</span> to build systems that are
        efficient, maintainable, and ready for growth.
      </p>
    </section>
  );
};

export default Intro;
