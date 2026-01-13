const skillGroups = [
    {
        category: 'Languages',
        skills: ['Python', 'TypeScript', 'C++', 'JavaScript', 'SQL'],
    },
    {
        category: 'Frameworks',
        skills: ['FastAPI', 'Node.js', 'React', 'Next.js'],
    },
    {
        category: 'Infrastructure',
        skills: ['Docker', 'Kubernetes', 'Argo CD', 'PostgreSQL', 'Redis', 'Kafka'],
    },
    {
        category: 'Trading APIs',
        skills: ['IBKR', 'Kite-Connect', 'XTS Symphony', 'Bakinzo', 'MT5'],
    },
    {
        category: 'Product',
        skills: ['Customer Discovery', 'PRD/JTBD', 'GTM Strategy', 'Roadmapping'],
    },
]

export function SkillsSection() {
    return (
        <section id="skills" className="mt-16">
            <h2 className="font-mono text-xl font-bold tracking-tight text-stone-900 dark:text-neutral-100">
                Skills
            </h2>

            <div className="mt-8 space-y-6">
                {skillGroups.map((group) => (
                    <div key={group.category}>
                        <h3 className="mb-3 font-mono text-sm font-medium text-stone-600 dark:text-neutral-400">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="cursor-default rounded bg-stone-200 px-3 py-1.5 font-mono text-sm text-stone-700 transition-all hover:bg-stone-300 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
