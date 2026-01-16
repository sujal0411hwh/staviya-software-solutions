/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.02em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.02em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.01em', fontWeight: '500' }],
                xl: ['1.25rem', { lineHeight: '1.3', letterSpacing: '0.01em', fontWeight: '500' }],
                '2xl': ['1.5rem', { lineHeight: '1.2', letterSpacing: '0.01em', fontWeight: '600' }],
                '3xl': ['1.875rem', { lineHeight: '1.1', letterSpacing: '0.005em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0.005em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.05', letterSpacing: '0.002em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '0.001em', fontWeight: '800' }],
                '7xl': ['4.5rem', { lineHeight: '1.0', letterSpacing: '0.001em', fontWeight: '800' }],
                '8xl': ['6rem', { lineHeight: '1.0', letterSpacing: '0.0005em', fontWeight: '900' }],
                '9xl': ['8rem', { lineHeight: '1.0', letterSpacing: '0.0005em', fontWeight: '900' }],
            },
            fontFamily: {
                heading: "space grotesk",
                paragraph: "nunito sans"
            },
            colors: {
                'magenta-accent': '#FF00FF',
                'dark-gray-background': '#1E2A3A',
                'light-blue': '#88CCFF',
                background: '#0A192F',
                secondary: '#FFD700',
                foreground: '#CCD6F6',
                'secondary-foreground': '#0A192F',
                'primary-foreground': '#0A192F',
                primary: '#64FFDA'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
