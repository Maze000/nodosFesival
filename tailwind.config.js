/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        // NODOS Cyberpunk Color Palette
        'nodos-black': '#000000',
        'nodos-cyan': '#00E0FF',
        'nodos-magenta': '#DE3EFF',
        'nodos-green': '#00FF88',
        'nodos-orange': '#FF4500',
        'nodos-gray': '#F5F5F5',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'flow-1': 'flow-1 8s ease-in-out infinite',
        'flow-2': 'flow-2 10s ease-in-out infinite',
        'flow-3': 'flow-3 12s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            textShadow: '0 0 20px #00E0FF, 0 0 30px #00E0FF, 0 0 40px #00E0FF',
            transform: 'scale(1)'
          },
          '100%': { 
            textShadow: '0 0 30px #DE3EFF, 0 0 40px #DE3EFF, 0 0 50px #DE3EFF',
            transform: 'scale(1.05)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'flow-1': {
          '0%': { 
            strokeDasharray: '0 1000',
            opacity: '0.2'
          },
          '50%': { 
            strokeDasharray: '500 500',
            opacity: '0.8'
          },
          '100%': { 
            strokeDasharray: '1000 0',
            opacity: '0.2'
          },
        },
        'flow-2': {
          '0%': { 
            strokeDasharray: '0 800',
            opacity: '0.1'
          },
          '50%': { 
            strokeDasharray: '400 400',
            opacity: '0.6'
          },
          '100%': { 
            strokeDasharray: '800 0',
            opacity: '0.1'
          },
        },
        'flow-3': {
          '0%': { 
            strokeDasharray: '0 600',
            opacity: '0.3'
          },
          '50%': { 
            strokeDasharray: '300 300',
            opacity: '0.9'
          },
          '100%': { 
            strokeDasharray: '600 0',
            opacity: '0.3'
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Colores dinámicos que se usan en componentes
    'text-cyan-400',
    'text-magenta-400',
    'text-green-400',
    'text-orange-400',
    'bg-cyan-500/20',
    'bg-magenta-500/20',
    'bg-green-500/20',
    'bg-orange-500/20',
    'border-cyan-500/40',
    'border-magenta-500/40',
    'border-green-500/40',
    'border-orange-500/40',
    'from-cyan-500',
    'to-cyan-600',
    'from-magenta-500',
    'to-magenta-600',
    'from-green-500',
    'to-green-600',
    'from-orange-500',
    'to-orange-600',
    'hover:from-cyan-600',
    'hover:to-cyan-700',
    'hover:from-magenta-600',
    'hover:to-magenta-700',
    'hover:from-green-600',
    'hover:to-green-700',
    'hover:from-orange-600',
    'hover:to-orange-700',
    'focus:ring-cyan-500',
    'focus:ring-magenta-500',
    'focus:ring-green-500',
    'focus:ring-orange-500',
  ],
};