import { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js, ts, jsx, tsx, mdx}',
    './src/stories/**/*.{js, ts, jsx, tsx, mdx}',
    './src/pages/**/*.{js, ts, jsx, tsx, mdx}',
    './src/components/**/*.{js, ts, jsx, tsx, mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-poppins)'],
        body: ['var(--font-alegreya)']
      },
      screens: {
        xs: '687px',
        sm: '1003px',
        md: '1375px',
      },
    }
  },
  fontSize: {
    xs: '14px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '24px',
    '2xl': '32px',
  },
  plugins: [],
}

export default config;