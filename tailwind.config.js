/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", './src/theme.css'],
    theme: {},
    plugins: [
        require('tailwindcss-animate'),
    ],
    darkMode: 'class',
};