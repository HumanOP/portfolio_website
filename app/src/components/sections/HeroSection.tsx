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

function RotatingText() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % roles.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <span className="inline-block min-w-[180px] text-neutral-500 dark:text-neutral-400">
            {roles[index]}
        </span>
    )
}

function LiveClock() {
    const [time, setTime] = useState('')

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

    return (
        <span className="font-mono text-sm text-neutral-400 dark:text-neutral-500">
            {time} IST
        </span>
    )
}

export function HeroSection() {
    return (
        <section id="about" className="pt-12 md:pt-16">
            <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
                    {/* TODO: Add actual image */}
                </div>

                <div className="flex-1">
                    {/* Name + Clock */}
                    <div className="flex items-baseline justify-between">
                        <h1 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
                            Divyanshu Kashyap
                        </h1>
                        <LiveClock />
                    </div>

                    {/* Rotating Role */}
                    <p className="mt-2 text-base">
                        <RotatingText /> · from India
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
