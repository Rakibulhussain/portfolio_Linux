/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- CRITICAL: Tells tailwind to scan your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        matrix: ['"Silkscreen"', 'cursive'],
      },
      colors: {
        kali: {
          bg: '#0a0d14',
          card: '#111622',
          cyan: '#00f0ff',
          red: '#ff2a2a',
        }
      }
    },
  },
  plugins: [],
}