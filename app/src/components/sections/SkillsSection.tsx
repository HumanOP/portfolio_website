export function SkillsSection() {
    return (
        <section id="skills" className="mt-6 px-4 md:px-5">
            <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">Skills.</h3>

            {/* Placeholder - will implement: SkillBadge components with icons */}
            <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'Tailwind CSS'].map(
                    (skill) => (
                        <span
                            key={skill}
                            className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-1 py-0.25 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                        >
                            {skill}
                        </span>
                    )
                )}
            </div>
        </section>
    )
}
