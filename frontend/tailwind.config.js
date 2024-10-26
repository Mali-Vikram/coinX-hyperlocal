/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
       extend: {
      boxShadow: {
        'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphic-hover': '12px 12px 24px #d1d9e6, -12px -12px 24px #ffffff',
        'inner-neumorphic': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
      },
    },
  },

    plugins: [],
}
