/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'box-xl': '1440px',
        'box-l': '1280px',
        'box-m': '1080px',
        'box-m': '720px',
        'box-s': '100%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "var(--gray)",
        coffee: "var(--coffee)",
        latte: "var(--latte)",
        cappuccino: "var(--cappuccino)",
        matcha: "var(--matcha)",
        sky: "var(--sky)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};