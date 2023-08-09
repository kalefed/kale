/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-anonymous_pro)'],
      },
      textColor: {
        'primary': '#b38e61',
        // black
        'secondary': '#bacade',
        // blue
        'danger': '#070a0e',
      },
      colors: {
        'gray': '#545454',
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}