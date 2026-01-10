export function HeroSection() {
    return (
        <section id="about" className="px-4 py-6 md:px-5">
            {/* Placeholder - will implement: Avatar, Name, Greeting, RotatingText, LiveClock, SocialLinks */}
            <div className="flex items-start gap-4">
                {/* Avatar placeholder */}
                <div className="h-16 w-16 shrink-0 rounded-full bg-neutral-200 ring-2 ring-neutral-200 dark:bg-neutral-800 dark:ring-neutral-900" />

                <div className="flex-1">
                    {/* Name placeholder */}
                    <h1 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl dark:text-neutral-50">
                        Your Name
                    </h1>

                    {/* Role + location placeholder */}
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-neutral-600 sm:gap-4 dark:text-neutral-300">
                        <span>Product Engineer</span>
                        <span className="hidden sm:inline">||</span>
                        <span>from India</span>
                    </div>

                    {/* Social links placeholder */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                        <button className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
                            Resume
                        </button>
                        <div className="flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                            ✉
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
