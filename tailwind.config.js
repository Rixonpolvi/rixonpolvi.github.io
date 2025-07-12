// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Path to your main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Path to ALL your React files
  ],
  theme: {
    extend: {
      // This is where you add your custom font
      fontFamily: {
        sans: ['IBM Plex Sans Condensed', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    typography
  ],
}