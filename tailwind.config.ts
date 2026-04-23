import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-heading)"]
      },
      colors: {
        sand: "#F6F1EA",
        charcoal: "#2B2623",
        sage: "#8FAF9A",
        gold: "#C8A96A",
        mist: "#EFE6DB"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(80, 61, 38, 0.08)",
        glass: "0 12px 40px rgba(95, 81, 64, 0.09)"
      },
      borderRadius: {
        organic: "24px",
        shell: "32px"
      },
      backgroundImage: {
        bloom:
          "radial-gradient(circle at top, rgba(200, 169, 106, 0.2), transparent 42%), radial-gradient(circle at bottom right, rgba(143, 175, 154, 0.22), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
