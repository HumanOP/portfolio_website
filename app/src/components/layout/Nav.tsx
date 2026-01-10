import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
]

export function Nav() {
    return (
        <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 md:px-6 lg:px-8 dark:text-neutral-300">
            <Link
                href="#"
                className="font-semibold text-neutral-900 dark:text-neutral-50"
                aria-label="Scroll to top"
            >
                portfolio.
            </Link>

            <div className="flex items-center gap-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-xs transition-colors hover:text-neutral-900 sm:text-xs dark:hover:text-neutral-50"
                    >
                        {link.label}
                    </Link>
                ))}
                <ThemeToggle />
            </div>
        </nav>
    )
}
