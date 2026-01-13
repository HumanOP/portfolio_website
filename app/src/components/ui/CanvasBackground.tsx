'use client'

import { useEffect, useRef } from 'react'


export function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationId: number
        const particles: Array<{
            x: number
            y: number
            vx: number
            vy: number
            size: number
        }> = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            particles.length = 0 // Clear existing
            const count = Math.floor((canvas.width * canvas.height) / 10000) // Density
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Slower movement
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                })
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Determine color based on system/theme
            const isDark = document.documentElement.classList.contains('dark')
            const color = isDark ? { r: 150, g: 150, b: 150 } : { r: 100, g: 100, b: 100 }

            // Update and draw particles
            particles.forEach((p, i) => {
                p.x += p.vx
                p.y += p.vy

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`
                ctx.fill()

                // Draw connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j]
                    const dx = p.x - p2.x
                    const dy = p.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const maxDist = 120

                    if (distance < maxDist) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${0.15 * (1 - distance / maxDist)
                            })`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            })

            animationId = requestAnimationFrame(animate)
        }

        resize()
        createParticles()
        animate()

        window.addEventListener('resize', () => {
            resize()
            createParticles()
        })

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-0 bg-background transition-colors duration-300"
            aria-hidden="true"
        />
    )
}
