export function ProjectsSection() {
    return (
        <section id="projects" className="mt-16">
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Projects</h2>

            <div className="mt-8 space-y-8">
                {/* Project Item */}
                <div className="group">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Project Name</h3>
                        <div className="flex gap-3 text-sm">
                            <a
                                href="#"
                                className="text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                            >
                                Live ↗
                            </a>
                            <a
                                href="#"
                                className="text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                            >
                                Code ↗
                            </a>
                        </div>
                    </div>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        Brief description of the project, what problem it solves, and key features.
                    </p>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                        React · TypeScript · PostgreSQL
                    </p>
                </div>

                {/* Another Project */}
                <div className="group">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                        <h3 className="font-medium text-neutral-900 dark:text-neutral-100">Another Project</h3>
                        <div className="flex gap-3 text-sm">
                            <a
                                href="#"
                                className="text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                            >
                                Live ↗
                            </a>
                        </div>
                    </div>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                        Description of another project with its key achievements.
                    </p>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                        Python · FastAPI · Redis
                    </p>
                </div>
            </div>
        </section>
    )
}
