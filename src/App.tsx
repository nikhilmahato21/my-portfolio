import React from "react";
import { useTheme } from "./context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // optional icon lib

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleTheme}
          className="p-2 rounded border dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <main className="p-4"> {/* your content */} </main>
    </div>
  );
};

export default App;
