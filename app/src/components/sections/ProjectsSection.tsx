const projects = [
    {
        name: 'OptionWyse',
        bullets: [
            'Retail algotrading-as-a-service platform. MVP shipped in 2 weeks.',
            'Broker auth, wallet, strategy lifecycle, live PnL, risk controls.',
            '100 pilot runs validated. Designed for 1000+ concurrent runs.',
        ],
        tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
    {
        name: 'IntentLock',
        bullets: [
            'LinkedIn focus extension that converts doomscrolling into action items.',
            'Shadow-DOM overlay, mode-based journeys, local LLM fallback.',
            '400-user waitlist from 30 discovery interviews.',
        ],
        tech: ['TypeScript', 'Chrome Extension', 'LLM'],
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
    {
        name: 'StrategyHub',
        bullets: [
            'Broker-agnostic F&O deployment platform. Supports Upstox (extensible to 18+ brokers).',
            'Manages 1000+ parallel strategies with unified error handling.',
            'SSE-based live PnL dashboard.',
        ],
        tech: ['Node.js', 'React', 'PostgreSQL', 'SSE'],
        links: { live: null, code: null },
    },
    {
        name: 'RAGanot',
        bullets: [
            'RAG chatbot with GPT-3.5 and LangChain for retrieval-augmented generation.',
            'Prompt engineering to reduce hallucination.',
            'Won 3rd place at Syntax Error 2023 (460 teams).',
        ],
        tech: ['Python', 'LangChain', 'GPT-3.5', 'Gradio'],
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="mt-16">
            <h2 className="font-mono text-xl font-bold tracking-tight text-stone-900 dark:text-neutral-100">
                Projects.
            </h2>

            <div className="mt-6 space-y-4">
                {projects.map((project) => (
                    <article
                        key={project.name}
                        className="rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:px-5 md:py-4"
                    >
                        {/* Header */}
                        <header className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-stone-900 dark:text-neutral-100">
                                {project.name}
                            </h3>
                            <div className="ml-auto flex gap-2">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-sm border border-stone-200 px-2 py-0.5 text-xs text-stone-600 transition-colors hover:bg-stone-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900"
                                    >
                                        live ↗
                                    </a>
                                )}
                                {project.links.code && (
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-sm border border-stone-200 px-2 py-0.5 text-xs text-stone-600 transition-colors hover:bg-stone-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900"
                                    >
                                        github ↗
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* Bullet points */}
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-stone-600 dark:text-neutral-400">
                            {project.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>

                        {/* Tech tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="inline-flex items-center rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-700 dark:bg-neutral-900/60 dark:text-neutral-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            {/* View all link */}
            <div className="mt-4 flex justify-center">
                <a
                    href="https://github.com/HumanOP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-sm border border-stone-200 px-3 py-1.5 text-sm text-stone-600 transition-colors hover:bg-stone-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-900"
                >
                    View all projects →
                </a>
            </div>
        </section>
    )
}
