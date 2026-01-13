export function ExperienceSection() {
    return (
        <section id="experience" className="mt-16">
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Experience</h2>

            <div className="mt-8 space-y-8">
                {/* Experience Item */}
                <div className="group">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Company Name</h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            Jan 2026 – Present
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Your Role</p>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        Description of your work and achievements. Focus on impact and results.
                    </p>
                </div>

                {/* Another Experience Item */}
                <div className="group">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Previous Company</h3>
                        <span className="text-sm text-neutral-500 dark:text-neutral-400">
                            Jun 2025 – Dec 2025
                        </span>
                    </div>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Previous Role</p>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        Description of your work at this company.
                    </p>
                </div>
            </div>
        </section>
    )
}
