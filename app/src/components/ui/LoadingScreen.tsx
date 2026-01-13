'use client'

import { useState, useEffect } from 'react'

export function LoadingScreen() {
    const [visible, setVisible] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // Start fade-out after a minimum display time
        const timer = setTimeout(() => {
            setFadeOut(true)
            // Remove from DOM after animation
            setTimeout(() => setVisible(false), 500)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-background ${fadeOut ? 'animate-fade-out' : ''}`}
        >
            <div className="text-center">
                {/* Name with typing effect */}
                <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
                    <span className="inline-block animate-pulse">dk.</span>
                </h1>
                {/* Loading indicator */}
                <div className="mt-4 flex justify-center gap-1">
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 dark:bg-neutral-500"
                        style={{ animationDelay: '0ms' }}
                    />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 dark:bg-neutral-500"
                        style={{ animationDelay: '150ms' }}
                    />
                    <span
                        className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 dark:bg-neutral-500"
                        style={{ animationDelay: '300ms' }}
                    />
                </div>
            </div>
        </div>
    )
}
