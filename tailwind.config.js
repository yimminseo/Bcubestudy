/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        "gray-01": "var(--gray-01)",
        "medium-blue": "var(--medium-blue)",
        menu: "var(--menu)",
        "point-blue": "var(--point-blue)",
        "primary-blue": "var(--primary-blue)",
        "sub-blue": "var(--sub-blue)",
        "variable-collection-glay04": "var(--variable-collection-glay04)",
        "variable-collection-glay05": "var(--variable-collection-glay05)",
        "variable-collection-gray04": "var(--variable-collection-gray04)",
        "variable-collection-gray05": "var(--variable-collection-gray05)",
        "variable-collection-gray07": "var(--variable-collection-gray07)",
        "variable-collection-gray08": "var(--variable-collection-gray08)",
        "variable-collection-gray09": "var(--variable-collection-gray09)",
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};