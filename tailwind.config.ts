import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        gradient:
          "linear-gradient(127deg, #007acc 14.2%, rgba(0, 204, 153, 0.6) 83.22%)",
      },
      colors: {
        blue: "#007ACC",
        green: "#0C9",
        black: "#1F2B33",
        black75: "rgba(31, 43, 51, 0.75)",
        black50: "rgba(31, 43, 51, 0.50)",
        black25: "rgba(31, 43, 51, 0.25)",
        black10: "rgba(31, 43, 51, 0.10)",
        black5: "rgba(31, 43, 51, 0.05)",
      },
      fontSize: {
        h1: "43px",
        h2: "38px",
        h3: "34px",
        h4: "30px",
        h5: "27px",
        h6: "24px",
        p: "21px",
        small: "17px",
        smaller: "14px",
      },
      boxShadow: {
        card: "3px 3px 20px 2px rgba(0, 0, 0, 0.10);",
      },
    },
  },
  plugins: [],
};
export default config;
