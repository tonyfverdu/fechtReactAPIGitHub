/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],

  theme: {
    extend: {
      blur: {
        xs: '1.5px',
      }
    },
  },

  plugins: [
    require('flowbite/plugin')
  ],
}



