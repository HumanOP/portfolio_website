import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
]

export function Nav() {
    return (
        <nav className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-4 text-sm text-neutral-500 md:px-8 dark:text-neutral-400">
            <Link
                href="#"
                className="font-medium text-neutral-900 dark:text-neutral-100"
                aria-label="Scroll to top"
            >
                dk.
            </Link>

            <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        {link.label}
                    </Link>
                ))}
                <ThemeToggle />
            </div>
        </nav>
    )
}
