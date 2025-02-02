// tailwind.config.ts
import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          'background': '#121212',
          'paper': '#1E1E1E',
          'primary': '#BB86FC',
          'secondary': '#03DAC6',
          'error': '#CF6679',
          'text': '#FFFFFF',
          'subtext': '#A0A0A0'
        }
      }
    }
  }
} satisfies Config

export default config