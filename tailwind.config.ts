import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Construction palette
        construction: {
          50:  '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // primary orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Engineering steel blue
        steel: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        // Concrete / site tones
        concrete: {
          50:  '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite 2s',
        'pulse-orange': 'pulseOrange 3s ease-in-out infinite',
        'spin-slow':    'spin 12s linear infinite',
        'stripe-move':  'stripeMove 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(249,115,22,0.3)' },
          '50%':      { boxShadow: '0 0 35px rgba(249,115,22,0.6)' },
        },
        stripeMove: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '56px 0' },
        },
      },
      boxShadow: {
        'glow-orange-sm': '0 0 12px rgba(249,115,22,0.25), 0 0 24px rgba(249,115,22,0.1)',
        'glow-orange':    '0 0 24px rgba(249,115,22,0.35), 0 0 48px rgba(249,115,22,0.15)',
        'glow-steel-sm':  '0 0 12px rgba(14,165,233,0.2),  0 0 24px rgba(14,165,233,0.08)',
        'glow-steel':     '0 0 24px rgba(14,165,233,0.3),  0 0 48px rgba(14,165,233,0.12)',
        'card-lift':      '0 8px 32px -4px rgba(0,0,0,0.18), 0 4px 12px -4px rgba(0,0,0,0.14)',
        'card-lift-dark': '0 8px 32px -4px rgba(0,0,0,0.5),  0 4px 12px -4px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // Construction warning stripes
        'warning-stripe':
          'repeating-linear-gradient(-45deg, #f97316, #f97316 8px, #1f2937 8px, #1f2937 16px)',
      },
    },
  },
  plugins: [],
}

export default config
