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
                    // Typing
                    if (charIndex < currentRole.length) {
                        setCharIndex((prev) => prev + 1)
                    } else {
                        // Pause at end, then start deleting
                        setTimeout(() => setIsDeleting(true), 1500)
                    }
                } else {
                    // Deleting
                    if (charIndex > 0) {
                        setCharIndex((prev) => prev - 1)
                    } else {
                        // Move to next role
                        setIsDeleting(false)
                        setRoleIndex((prev) => (prev + 1) % roles.length)
                    }
                }
            },
            isDeleting ? 50 : 100
        )

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, currentRole, mounted])

    if (!mounted) {
        return (
            <span className="inline-block min-w-[200px] text-neutral-500 dark:text-neutral-400">
                {roles[0]}
            </span>
        )
    }

    return (
        <span className="inline-block min-w-[200px] text-neutral-500 dark:text-neutral-400">
            {currentRole.slice(0, charIndex)}
            <span className="animate-pulse text-neutral-400 dark:text-neutral-500">|</span>
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
            <span className="font-mono text-sm text-neutral-400 dark:text-neutral-500">--:-- IST</span>
        )
    }

    return (
        <span className="font-mono text-sm text-neutral-400 dark:text-neutral-500">{time} IST</span>
    )
}

export function HeroSection() {
    return (
        <section id="about" className="pt-12 md:pt-16">
            <div className="flex items-start gap-6">
                {/* Avatar with glow effect */}
                <div className="group relative">
                    {/* Glow ring on hover */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neutral-400 to-neutral-600 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-50 dark:from-neutral-500 dark:to-neutral-700" />

                    {/* Avatar container */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-neutral-200 transition-all duration-300 group-hover:ring-neutral-400 dark:ring-neutral-700 dark:group-hover:ring-neutral-500">
                        <Image
                            src="/avatar.jpg"
                            alt="Divyanshu Kashyap"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                <div className="flex-1">
                    {/* Name + Clock */}
                    <div className="flex items-baseline justify-between">
                        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
                            Divyanshu Kashyap
                        </h1>
                        <LiveClock />
                    </div>

                    {/* Typewriter Role */}
                    <p className="mt-2 text-base">
                        <TypewriterText /> · from India
                    </p>

                    {/* Social links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                        >
                            Resume
                        </a>
                        <a
                            href="mailto:divyanshu_k@me.iitr.ac.in"
                            className="rounded-md px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/HumanOP"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/divyanshu-k/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
