import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        black: {
          400: '#171A1E'
        },
        white: {
          400: '#FFF'
        },
        gray: {
          50: 'rgba(23, 26, 30,0.05)',
          100: 'rgba(23, 26, 30,0.1)',
          200: 'rgba(23, 26, 30,0.5)',
          400: '#C6C9CF'
        },
        amber: {
          200: '#FCF5E8',
          300: '#F0E9DC',
          400: '#FFF8EC',
          500: '#FCF6ED',
          600: '#EFE6D4',
          700: '#FFE3CE'
        },
        green: {
          400: '#29AB65'
        },
        orange: {
          400: '#E48616'
        },
        red: {
          400: '#DC2323'
        }
      },
      fontSize: {
        '3xl': 32
      }
    }
  },
  plugins: []
}
export default config
