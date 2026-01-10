'use client'

import { useState, useEffect } from 'react'

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        // Check localStorage or system preference
        const stored = localStorage.getItem('theme')
        if (stored) {
            setIsDark(stored === 'dark')
        } else {
            setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    }, [])

    useEffect(() => {
        // Update document class when theme changes
        if (isDark) {
            document.documentElement.classList.add('dark')
            document.documentElement.style.colorScheme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.style.colorScheme = 'light'
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-200 text-neutral-700 outline-none transition-all hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            aria-label="Toggle color theme"
            aria-pressed={isDark}
        >
            {isDark ? (
                // Sun icon (show when dark, click to go light)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            ) : (
                // Moon icon (show when light, click to go dark)
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-moon"
                >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
            )}
            <span className="sr-only">{isDark ? 'Switch to light mode' : 'Switch to dark mode'}</span>
        </button>
    )
}
