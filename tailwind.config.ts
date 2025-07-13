import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
         'bg-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'border-spin': 'border-spin 7s linear infinite',
          'bg-pan': 'bg-pan 8s infinite linear',
      },
     colors: {
        developer: {
          background: "#1E1E2F",
          primary: "#61DAFB",  // React Blue
          accent: "#FF6B81",   // Coral
          text: "#FFFFFF",     // White
        },
      },
    },
  },
  plugins: [],
};
export default config;
