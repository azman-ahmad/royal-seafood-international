import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
   
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        "button-primary": "var(--button-primary)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
