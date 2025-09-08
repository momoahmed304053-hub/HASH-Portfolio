export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-primary', 'bg-primary-light', 'bg-primary-dark',
    'bg-accent', 'bg-accent-light', 'bg-accent-dark',
    'bg-slate', 'bg-slate-light', 'bg-slate-dark',
    'bg-background', 'bg-background-dark',
    'text-primary', 'text-primary-light', 'text-primary-dark',
    'text-accent', 'text-accent-light', 'text-accent-dark',
    'text-slate', 'text-slate-light', 'text-slate-dark',
    'text-background', 'text-background-dark',
    'border-primary', 'border-primary-light', 'border-primary-dark',
    'border-accent', 'border-accent-light', 'border-accent-dark',
    'border-slate', 'border-slate-light', 'border-slate-dark',
    'border-background', 'border-background-dark',
    'from-primary', 'from-primary-light', 'from-primary-dark',
    'from-accent', 'from-accent-light', 'from-accent-dark',
    'from-slate', 'from-slate-light', 'from-slate-dark',
    'from-background', 'from-background-dark',
    'to-primary', 'to-primary-light', 'to-primary-dark',
    'to-accent', 'to-accent-light', 'to-accent-dark',
    'to-slate', 'to-slate-light', 'to-slate-dark',
    'to-background', 'to-background-dark',
    'via-primary', 'via-primary-light', 'via-primary-dark',
    'via-accent', 'via-accent-light', 'via-accent-dark',
    'via-slate', 'via-slate-light', 'via-slate-dark',
    'via-background', 'via-background-dark',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // indigo-500
          light: '#818cf8',   // indigo-400
          dark: '#4f46e5',    // indigo-600
        },
        accent: {
          DEFAULT: '#a21caf', // violet-700
          light: '#e879f9',   // fuchsia-400
          dark: '#701a75',    // fuchsia-900
        },
        slate: {
          DEFAULT: '#64748b', // slate-500
          light: '#cbd5e1',   // slate-200
          dark: '#334155',    // slate-800
        },
        background: {
          DEFAULT: '#f8fafc', // slate-50
          dark: '#1e293b',    // slate-900
        },
      },
    },
  },
  plugins: [],
}
