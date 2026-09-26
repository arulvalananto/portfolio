import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                xs: '425px'
            },
            backgroundImage: {
                'radial-gradient':
                    'radial-gradient(50% 50% at 50% 50%, var(--color-synthup-glow-yellow) 48%, var(--color-synthup-glow-orange) 72%, var(--color-synthup-glow-pink) 88%)',
                dot: 'radial-gradient(black 1px, transparent 0)'
            },
            keyframes: {
                bouncer: {
                    '0%': { transform: 'translateX(80px)' },
                    '50%': { transform: 'translateX(-25px)' },
                    '100%': { transform: 'translateX(0px)' }
                },
                shaker: {
                    '0%': { transform: 'rotate(-10deg)' },
                    '100%': { transform: 'rotate(10deg)' }
                },
                sizeup: {
                    '0%': { transform: 'scale(0%)' },
                    '100%': { transform: 'scale(100%)' }
                },
                'shaker-reverse': {
                    '0%': { transform: 'rotate(10deg)' },
                    '100%': { transform: 'rotate(-10deg)' }
                },
                loadIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(25px)'
                    },
                    '100%': {
                        opacity: '100%',
                        transform: 'translateY(0)'
                    }
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' }
                },
                moveIn: {
                    '0%': { transform: 'translate(0px, 0px)' },
                    '50%': { transform: 'translate(1px, 1px)' },
                    '100%': { transform: 'translateX(2px, 2px)' }
                }
            },
            animation: {
                shaker: 'shaker .8s infinite alternate',
                'shaker-reverse-slow': 'shaker-reverse 1s infinite alternate',
                'shaker-reverse': 'shaker-reverse 1.5s infinite alternate-reverse',
                loadIn: 'loadIn .5s forwards',
                'loadIn-slow': 'loadIn .3s forwards',
                'loadIn-iframe': 'loadIn 1s forwards',
                'sizeup-veryslow': 'sizeup 2s forwards',
                'sizeup-slow': 'sizeup 1s forwards',
                'sizeup-moderate': 'sizeup .5s forwards',
                'sizeup-fast': 'sizeup .3s forwards',
                'bounce-right': 'bouncer 1.5s ease-out',
                wiggle: 'wiggle 1s ease-in-out infinite',
                moveIn: 'moveIn 1s ease-in-out infinite'
            },
            fontFamily: {
                DMSans: ['var(--font-DMSans)'],
                poppins: ['var(--font-poppins)'],
                quicksand: ['var(--font-quicksand)'],
                dancingScript: ['var(--font-dancingscript)'],
                leagueSpartan: ['var(--font-leagueSpartan)'],
                inter: ['var(--font-inter)'],
                slackOne: ['var(--slackOne)']
            },
            backgroundPosition: {
                'minus-one': '-1px -1px'
            },
            gridColumn: {
                'span-15': 'span 15 / span 15',
                'span-24': 'span 24 / span 24',
                'span 16': 'span 16 / span 16'
            },
            gridRow: {
                'span-15': 'span 15 / span 15',
                'span-24': 'span 24 / span 24',
                'span 16': 'span 16 / span 16'
            },
            gridTemplateColumns: {
                '24': 'repeat(24, minmax(0, 1fr))'
            }
        }
    },
    plugins: []
}
export default config
