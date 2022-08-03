/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "black-rgba": "rgba(0, 0, 0, 0.1)",
                "dark-black-rgba": "rgba(0, 0, 0, 0.5)",
            },
            screens: {
                "max-2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                "max-xl": { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                "max-lg": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "max-md": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "max-sm": { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },

    plugins: [],
};
