module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#264653',
                secondary: '#2A9D8F',
                tertiary: '#E9C46A',
                orange: '#F4A261',
                'dark-orange': '#E76F51',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
