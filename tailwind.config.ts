import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8D5A3",
          dark: "#8B6914",
          metallic: "#D4AF37",
        },
        "black-primary": "#0A0A0A",
        charcoal: "#1A1A1A",
        "dark-card": "#111111",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A84C, #D4AF37, #8B6914)",
        "gold-radial": "radial-gradient(circle, #C9A84C20 0%, transparent 70%)",
      },
      boxShadow: {
        "gold-glow": "0 0 30px rgba(201, 168, 76, 0.4)",
        "gold-glow-lg": "0 0 60px rgba(201, 168, 76, 0.3)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 20s linear infinite",
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "scale-in": "scaleIn 0.4s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(201, 168, 76, 0.3)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(201, 168, 76, 0.6), 0 0 80px rgba(201, 168, 76, 0.2)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
