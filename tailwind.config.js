module.exports = {
  darkMode: 'class', 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        notes: ['notes', 'sans-serif'],
      },
      colors: {
        neutralDark: "#71717A",
        neutralLight: "#E5E7EB",
        neutralExtraLight: "#F4F4F5",
        accentPink: "#FB3AA2",
        pureWhite: "#FFFFFF",
        pureBlack: "#09090B",
        accentPurple: "#5D2DE6",
        neutralGray: "#A1A1AA",
        bgBlack:"#121212",
        bgNeutral:"#27272A"
      },
    },
  },
  plugins: [],
};
