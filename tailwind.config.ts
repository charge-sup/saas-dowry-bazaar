
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        burgundy: {
          DEFAULT: "#8B0000",
          light: "#A52A2A",
          dark: "#800000",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#FFD700",
          dark: "#B8860B",
        },
        ivory: {
          DEFAULT: "#FFFFF0",
          light: "#FFFAF0",
          dark: "#FFF8DC",
        },
        navy: {
          DEFAULT: "#000080",
          light: "#000099",
          dark: "#00004d",
        },
        emerald: {
          DEFAULT: "#046307",
          light: "#50C878",
          dark: "#004d00",
        },
        saffron: {
          DEFAULT: "#FF9933",
          light: "#FFAC42",
          dark: "#E57300",
        },
        royal: {
          DEFAULT: "#034219", // Deep green for dark mode background
          dark: "#022712",
          light: "#045823",
        },
        filigree: {
          DEFAULT: "#D4AF37", // Golden filigree color
          light: "#F0DA8A",
          dark: "#B8860B",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
        goldenPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 175, 55, 0)" },
          "50%": { boxShadow: "0 0 10px 3px rgba(212, 175, 55, 0.5)" },
        },
        filigreeAppear: {
          "0%": { opacity: "0", transform: "scale(0.94)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.6s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.6s ease-out forwards",
        fadeInRight: "fadeInRight 0.6s ease-out forwards",
        scaleIn: "scaleIn 0.5s ease-out forwards",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        goldenPulse: "goldenPulse 2s ease-in-out infinite",
        filigreeAppear: "filigreeAppear 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)",
        soft: "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
        elegant: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
        gold: "0 0 15px 2px rgba(212, 175, 55, 0.3)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        "filigree-pattern": "url('/lovable-uploads/30545a1f-538a-4935-bb2c-68f6fe310646.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
