import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const navLinks = [
    { href: '#experience', label: 'experience' },
    { href: '#projects', label: 'projects' },
    { href: '#skills', label: 'skills' },
]

export function Nav() {
    return (
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-4 text-sm text-muted-foreground md:px-6">
            <Link
                href="#"
                className="font-medium text-foreground transition-colors hover:text-stone-600 dark:hover:text-neutral-300"
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
