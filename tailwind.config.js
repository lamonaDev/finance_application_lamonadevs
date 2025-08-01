/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // Scan Vite's src folder for classes
        './node_modules/react-bits/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                    shine: {
                        "0%": { backgroundPosition: "200%" },
                        "100%": { backgroundPosition: "0%" },
                },
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
        },
    },
        animation: {
            shine: "shine 3s linear infinite", // Matches speed={3} from ShinyText
        },
        backgroundImage: {
            "shine-gradient":
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
    },
        backgroundSize: {
            "200%": "200%",
    },
},
},
    plugins: [],
};
