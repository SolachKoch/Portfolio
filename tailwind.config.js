/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  theme: {
    extend: {
      screens: {
        xs: "320px", // iPhone 5
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // iPhone 14 Pro Max
      },
    },
  },
  plugins: [],
};
