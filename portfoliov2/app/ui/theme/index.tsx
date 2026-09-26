'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextValue = { theme: Theme; toggleTheme: () => void }

const STORAGE_KEY = 'portfolio-theme'
const ThemeContext = createContext<ThemeContextValue | null>(null)

const getSystemTheme = (): Theme =>
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const getInitialTheme = (): Theme => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

const applyTheme = (theme: Theme) => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', theme === 'dark' ? '#121212' : '#ffffff')
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(getInitialTheme)

    useEffect(() => {
        const storedTheme = window.localStorage.getItem(STORAGE_KEY) as Theme | null
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

        if (storedTheme === 'light' || storedTheme === 'dark') {
            applyTheme(storedTheme)
            return
        }

        const syncSystemTheme = () => {
            const savedTheme = window.localStorage.getItem(STORAGE_KEY)
            if (savedTheme === 'light' || savedTheme === 'dark') return
            const nextTheme = getSystemTheme()
            setTheme(nextTheme)
            applyTheme(nextTheme)
        }

        mediaQuery.addEventListener('change', syncSystemTheme)
        return () => mediaQuery.removeEventListener('change', syncSystemTheme)
    }, [])

    const toggleTheme = useCallback(() => {
        setTheme((currentTheme) => {
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark'
            window.localStorage.setItem(STORAGE_KEY, nextTheme)
            applyTheme(nextTheme)
            return nextTheme
        })
    }, [])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

const useTheme = () => {
    const theme = useContext(ThemeContext)
    if (!theme) throw new Error('useTheme must be used within ThemeProvider')
    return theme
}

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === 'dark'

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            suppressHydrationWarning
        >
            <FiSun
                aria-hidden="true"
                className={`transition-all duration-400 theme-toggle__icon ${!isDark ? 'text-white translate-x-0.5' : ''}`}
            />
            <FiMoon
                aria-hidden="true"
                className={`transition-all duration-400 theme-toggle__icon ${isDark ? 'text-black -translate-x-0.5' : ''}`}
            />
            <span className="theme-toggle__thumb" aria-hidden="true" />
        </button>
    )
}
