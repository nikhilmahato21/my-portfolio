import { useTheme } from "../context/ThemeContext";


const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
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
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 hover:scale-110"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            theme === "dark" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </header>
        <main className="p-4">
          <h1 className="text-pureBlack dark:text-pureWhite font-sans font-semibold tracking-[0.023] leading-5">Nikhil Mahato</h1>
          <p className="text-pureBlack  dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5">Full-stack developer & DevOps Engineer</p>
          <p className="text-pureBlack dark:text-pureWhite font-sans font-thin opacity-70 tracking-[0.023] leading-5">Jamshedpur,India</p>
          </main>
          </>
  )
}

export default Header