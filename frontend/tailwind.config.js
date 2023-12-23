/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '4px 4px 8px 5px rgba(0, 0, 0, 0.3)',
        'circle': '4px 4px 12px 5px rgba(0, 0, 0, 0.2)',
        'text': '4px 4px 12px 5px rgba(0, 0, 0, 0.2)',
      },
      backgroundColor: {
        'logo': '#8183B1'
      },
      backgroundImage: {
        'image1': "url('live.jpg')",
        'image2': "url('file.jpg')",
      }
    },
  },
  plugins: [],
}

