/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                'base': ['Poppins', 'sans-serif'],
            },
            colors: {
                'primary': "var(--el-color-primary)",
                'secondary': "var(--secondary-color)",
                'success': "var(--success-color)",
                'warning': "var(--warning-color)",
                'info': "var(--info-color)",
                'danger': "var(--e-color)",
                'light': "var(--light-color)",
                'dark': "var(--dark-color)",
            },
        },
    },
    plugins: [
        
    ]
}