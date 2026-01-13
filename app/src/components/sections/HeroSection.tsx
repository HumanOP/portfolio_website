'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const roles = [
    'Product Engineer',
    'Backend Developer',
    'Trading Systems Builder',
    '0→1 Product Builder',
    'Quant Developer',
    'Trek Leader',
    'Builder',
]

function TypewriterText() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentRole = roles[roleIndex]

    useEffect(() => {
        if (!mounted) return

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (charIndex < currentRole.length) {
                        setCharIndex((prev) => prev + 1)
                    } else {
                        setTimeout(() => setIsDeleting(true), 1800)
                    }
                } else {
                    if (charIndex > 0) {
                        setCharIndex((prev) => prev - 1)
                    } else {
                        setIsDeleting(false)
                        setRoleIndex((prev) => (prev + 1) % roles.length)
                    }
                }
            },
            isDeleting ? 40 : 80
        )

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, currentRole, mounted])

    if (!mounted) {
        return (
            <span className="font-mono text-stone-600 dark:text-neutral-400">
                {roles[0]}
                <span className="ml-0.5 inline-block h-5 w-0.5 bg-stone-500 dark:bg-neutral-500" />
                <span className="text-stone-500 dark:text-neutral-500"> · from India</span>
            </span>
        )
    }

    return (
        <span className="font-mono text-stone-600 dark:text-neutral-400">
            {currentRole.slice(0, charIndex)}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-stone-500 dark:bg-neutral-500" />
            <span className="text-stone-500 dark:text-neutral-500"> · from India</span>
        </span>
    )
}

function LiveClock() {
    const [time, setTime] = useState<string | null>(null)

    useEffect(() => {
        const update = () => {
            setTime(
                new Date().toLocaleTimeString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                })
            )
        }
        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!time) {
        return (
            <span className="font-mono text-sm text-stone-500 dark:text-neutral-500">--:-- IST</span>
        )
    }

    return (
        <span className="font-mono text-sm text-stone-500 dark:text-neutral-500">{time} IST</span>
    )
}

// Animated greeting with shimmer effect
function AnimatedGreeting() {
    return (
        <span className="animate-shimmer bg-gradient-to-r from-stone-700 via-stone-500 to-stone-700 bg-[length:200%_100%] bg-clip-text font-mono text-transparent dark:from-neutral-400 dark:via-neutral-200 dark:to-neutral-400">
            hi there, I&apos;m
        </span>
    )
}

export function HeroSection() {
    return (
        <section id="about" className="pt-12 md:pt-16">
            <div className="flex items-start gap-6">
                {/* Avatar with canvas-like glow effect */}
                <div className="group relative">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-300 opacity-0 blur-md transition-all duration-500 group-hover:opacity-60 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-600" />
                    {/* Inner glow */}
                    <div className="absolute -inset-1 rounded-full bg-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-30 dark:bg-neutral-700" />
                    {/* Avatar container */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-neutral-300 transition-all duration-300 group-hover:ring-4 group-hover:ring-neutral-400 md:h-24 md:w-24 dark:ring-neutral-600 dark:group-hover:ring-neutral-500">
                        <Image
                            src="/avatar.jpg"
                            alt="Divyanshu Kashyap"
                            fill
                            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1">
                    {/* Animated Greeting + Name + Clock */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <div>
                            <p className="text-sm">
                                <AnimatedGreeting />
                            </p>
                            <h1 className="text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl md:text-4xl dark:text-neutral-100">
                                Divyanshu Kashyap
                            </h1>
                        </div>
                        <LiveClock />
                    </div>

                    {/* Typewriter Role (cursor before "from India") */}
                    <p className="mt-3 min-h-6 text-sm">
                        <TypewriterText />
                    </p>

                    {/* Social links - John Rush inspired minimal style */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                        <a
                            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded border border-stone-400 bg-stone-900 px-4 py-2 font-mono text-sm font-medium text-white transition-all hover:bg-stone-800 dark:border-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                            Resume
                        </a>
                        <a
                            href="mailto:divyanshu_k@me.iitr.ac.in"
                            className="rounded border border-stone-300 px-3 py-2 font-mono text-sm text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/HumanOP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded border border-stone-300 px-3 py-2 font-mono text-sm text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/divyanshu-k/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded border border-stone-300 px-3 py-2 font-mono text-sm text-stone-700 transition-all hover:border-stone-400 hover:bg-stone-100 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
