/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Rubik', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        glass: {
          border: 'rgba(255,255,255,0.18)',
          bg: 'rgba(255,255,255,0.06)',
        },
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        floaty2: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(28px) translateX(-16px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      animation: {
        floaty: 'floaty 14s ease-in-out infinite',
        floaty2: 'floaty2 18s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        scan: 'scan 8s linear infinite',
      },
    },
  },
  plugins: [],
};
