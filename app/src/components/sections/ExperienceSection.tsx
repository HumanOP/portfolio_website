export function ExperienceSection() {
    return (
        <section id="experience" className="mt-6 px-4 md:px-5">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Work Experience.
            </h3>

            {/* Placeholder - will implement: ExperienceCard components */}
            <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950">
                    <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                            🏢
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                                <h4 className="min-w-0 flex-1 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                                    Company Name
                                </h4>
                                <span className="flex-shrink-0 self-start whitespace-nowrap rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                                    Jan 2026 – Present
                                </span>
                            </div>
                            <p className="text-xs text-neutral-600 dark:text-neutral-300">Your Role</p>
                            <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                                Description of your work and achievements.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
