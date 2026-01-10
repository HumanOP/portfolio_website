export function ProjectsSection() {
    return (
        <section id="projects" className="mt-6 px-4 md:px-5">
            <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Projects.
            </h3>

            {/* Placeholder - will implement: ProjectCard components */}
            <div className="space-y-4">
                <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                            Project Name
                        </h4>
                        <div className="flex gap-2">
                            <a
                                href="#"
                                className="rounded-sm border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                            >
                                live preview ↗
                            </a>
                            <a
                                href="#"
                                className="rounded-sm border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                            >
                                github ↗
                            </a>
                        </div>
                    </div>

                    <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        <li>Feature or achievement description</li>
                        <li>Another feature or metric</li>
                    </ul>

                    <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
                            React
                        </span>
                        <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
                            TypeScript
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
