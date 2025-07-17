import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; 

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="p-4  flex justify-between items-center ">
      <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center transition duration-300 hover:scale-110 hover:shadow-lg">
        <img
          src="/profile.png"
          alt="Profile"
          className="h-full w-full object-cover rounded-full "
        />
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 dark:border-gray-700 hover:bg-gray-100 hover:rounded-full dark:hover:bg-gray-800"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  )
}

export default Header