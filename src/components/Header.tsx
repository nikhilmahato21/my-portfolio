import { useTheme } from "../context/ThemeContext";


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
        className="flex items-center gap-2 p-2 dark:border-gray-700  transition duration-200 hover:scale-110"
      >
        <img
          src={theme === "dark" ? "/stealth-white.png" : "/spotlight.png"}
          alt={theme === "dark" ? "Stealth" : "Spotlight"}
          className="h-5 w-5"
        />
        <span className="font-normal tracking-normal font-mono">
          {theme === "dark" ? "Stealth" : "Spotlight"}
        </span>
      </button>
    </header>
  )
}

export default Header