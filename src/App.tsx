import Header from "./components/Header";

const App = () => {
  

  return (
    <div className="min-h-screen flex  justify-center  bg-white  dark:bg-pureBlack text-black dark:text-pureWhite transition-colors duration-300">
      <div className="md:max-w-4xl w-full border border-red-100 pt-16 px-2">
        <Header />
        <main className="p-4">
          <h1 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5">Nikhil Mahato</h1>
          <p className="text-pureBlack  dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5">Full-stack developer & DevOps Engineer</p>
          <p className="text-pureBlack dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5">Jamshedpur,India</p>
          </main>
      </div>
    </div>
  );
};

export default App;
