module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('assets/bg.jpg')",
      }),
      backgroundColor: (theme) => ({
        monogray: "rgba(27,27,25,var(--tw-bg-opacity))",
      }),
      boxShadow: (theme) => ({
        xlc: "0 0px 15px -3px rgba(0, 0, 0, 1), 0 4px 6px -2px rgba(0, 0, 0, 0.5)",
      }),
      listStyleType: (theme) => ({
        arrow: "doubleArrow",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
