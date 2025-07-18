import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Links from "./components/Links";

import Projects from "./components/Projects";

const App = () => {
  

  return (
    <div className="min-h-screen flex  justify-center  bg-white  dark:bg-bgBlack text-pureBlack dark:text-pureWhite transition-colors duration-300">
      <div className="md:max-w-4xl w-full border border-red-100 pt-16 px-2">
        <Header />
        <Intro/>
        <Links/>
        <Experience/>
        
        <Projects/>
        <Blog/>
      </div>
    </div>
  );
};

export default App;
