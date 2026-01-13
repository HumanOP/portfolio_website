export function HeroSection() {
    return (
        <section id="about" className="pt-12 md:pt-16">
            <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800" />

                <div className="flex-1">
                    {/* Name */}
                    <h1 className="text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
                        Your Name
                    </h1>

                    {/* Role + location */}
                    <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400">
                        Product Engineer · from India
                    </p>

                    {/* Social links */}
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                        <a
                            href="#"
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
                            href="https://github.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md px-4 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
