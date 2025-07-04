/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#6366F1', // indigo-500
        'primary-50': '#EEF2FF', // indigo-50
        'primary-100': '#E0E7FF', // indigo-100
        'primary-500': '#6366F1', // indigo-500
        'primary-600': '#4F46E5', // indigo-600
        'primary-700': '#4338CA', // indigo-700
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#EC4899', // pink-500
        'secondary-50': '#FDF2F8', // pink-50
        'secondary-100': '#FCE7F3', // pink-100
        'secondary-500': '#EC4899', // pink-500
        'secondary-600': '#DB2777', // pink-600
        'secondary-700': '#BE185D', // pink-700
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#F59E0B', // amber-500
        'accent-50': '#FFFBEB', // amber-50
        'accent-100': '#FEF3C7', // amber-100
        'accent-500': '#F59E0B', // amber-500
        'accent-600': '#D97706', // amber-600
        'accent-700': '#B45309', // amber-700
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#F8FAFC', // slate-50
        'surface': '#FFFFFF', // white
        'surface-50': '#F8FAFC', // slate-50
        'surface-100': '#F1F5F9', // slate-100

        // Text Colors
        'text-primary': '#1E293B', // slate-800
        'text-secondary': '#64748B', // slate-500
        'text-muted': '#94A3B8', // slate-400

        // Status Colors
        'success': '#10B981', // emerald-500
        'success-50': '#ECFDF5', // emerald-50
        'success-100': '#D1FAE5', // emerald-100
        'success-500': '#10B981', // emerald-500
        'success-600': '#059669', // emerald-600
        'success-foreground': '#FFFFFF', // white

        'warning': '#F59E0B', // amber-500
        'warning-50': '#FFFBEB', // amber-50
        'warning-100': '#FEF3C7', // amber-100
        'warning-500': '#F59E0B', // amber-500
        'warning-600': '#D97706', // amber-600
        'warning-foreground': '#FFFFFF', // white

        'error': '#EF4444', // red-500
        'error-50': '#FEF2F2', // red-50
        'error-100': '#FEE2E2', // red-100
        'error-500': '#EF4444', // red-500
        'error-600': '#DC2626', // red-600
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E2E8F0', // slate-200
        'border-light': '#F1F5F9', // slate-100
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'data': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-medium': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
        'data-medium': '500',
      },
      boxShadow: {
        'morphic': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'morphic-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'morphic-active': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'floating': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'micro-bounce': 'micro-bounce 0.3s ease-in-out',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.8',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        'micro-bounce': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '500ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '150': '150',
        '200': '200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
