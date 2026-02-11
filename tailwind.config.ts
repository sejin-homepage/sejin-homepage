import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#F5F1E8',
          dark: '#E8DCC8',
          light: '#FAF7F0',
        },
        gold: {
          DEFAULT: '#D4A574',
          dark: '#C9A05E',
          light: '#E8CDB0',
          lighter: '#F5EDE3',
        },
        body: '#212121',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        content: '1200px',
        wide: '1400px',
      },
      animation: {
        'golden-glow': 'goldenGlow 3s ease-in-out infinite',
        'highlight-wave': 'highlightWave 6s ease infinite',
        'fade-up': 'fadeUp 0.8s ease',
        'pulse-line': 'pulseLine 3s ease infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
      keyframes: {
        goldenGlow: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(212,165,116,0.3), 0 0 50px rgba(212,165,116,0.2)',
            borderColor: 'rgba(212,165,116,0.4)',
          },
          '50%': {
            boxShadow: '0 0 50px rgba(212,165,116,0.6), 0 0 80px rgba(212,165,116,0.4)',
            borderColor: 'rgba(212,165,116,0.7)',
          },
        },
        highlightWave: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(15px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        neonPulse: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(212,165,116,0.5), inset 0 0 15px rgba(212,165,116,0.2)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 30px rgba(212,165,116,0.8), inset 0 0 20px rgba(212,165,116,0.3)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
