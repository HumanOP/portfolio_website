const skills = [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
]

export function SkillsSection() {
    return (
        <section id="skills" className="mt-16">
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Skills</h2>

            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                {skills.join(' · ')}
            </p>
        </section>
    )
}
