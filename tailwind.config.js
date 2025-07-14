import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

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
        sans: ["IBM Plex Sans Condensed", ...defaultTheme.fontFamily.sans],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "code::before": { content: '""' }, // Remove default backticks
            "code::after": { content: '""' },
            code: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.200"),
              fontWeight: "500",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
            },
            "ol > li::marker": {
              fontWeight: "500",
              color: theme("colors.gray.700"), // Softer grey for the numbers
            },
            "ul > li::marker": {
              backgroundColor: theme("colors.gray.400"), // Softer grey for the bullet points
            },
            "--tw-prose-body": theme("colors.gray[700]"),
            "--tw-prose-headings": theme("colors.gray[900]"),
            "--tw-prose-td-borders": theme("colors.gray[300]"),
            "--tw-prose-th-borders": theme("colors.gray[400]"),
            "--tw-prose-captions": theme("colors.gray[500]"),
            "--tw-prose-code": theme("colors.gray[800]"),
            "--tw-prose-pre-code": theme("colors.gray[200]"),
            "--tw-prose-pre-bg": theme("colors.gray[800]"),
            "--tw-prose-thead": {
              color: theme("colors.gray.900"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "--tw-prose-tbody-tr-borders": theme("colors.gray.300"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
