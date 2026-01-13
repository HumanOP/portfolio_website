const projects = [
    {
        name: 'OptionWyse',
        description:
            'Retail algotrading-as-a-service platform. MVP shipped in 2 weeks with broker auth, wallet, strategy lifecycle, live PnL, risk controls. 100 pilot runs validated. Designed for 1000+ concurrent runs with isolated runners and event bus architecture.',
        tech: 'Python · FastAPI · PostgreSQL · Redis · Docker',
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
    {
        name: 'IntentLock',
        description:
            'LinkedIn focus extension that converts doomscrolling into action items. Shadow-DOM overlay, mode-based journeys, local LLM fallback. 400-user waitlist from 30 discovery interviews.',
        tech: 'TypeScript · Chrome Extension · LLM',
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
    {
        name: 'StrategyHub',
        description:
            'Broker-agnostic F&O deployment platform. Supports Upstox (extensible to 18+ brokers). Manages 1000+ parallel strategies with unified error handling. SSE-based live PnL dashboard.',
        tech: 'Node.js · React · PostgreSQL · SSE',
        links: { live: null, code: null },
    },
    {
        name: 'RAGanot',
        description:
            'RAG chatbot with GPT-3.5 and LangChain for retrieval-augmented generation. Prompt engineering to reduce hallucination. Won 3rd place at Syntax Error 2023 (460 teams).',
        tech: 'Python · LangChain · GPT-3.5 · Gradio',
        links: { live: null, code: 'https://github.com/HumanOP' },
    },
]

export function ProjectsSection() {
    return (
        <section id="projects" className="mt-16">
            <h2 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">Projects</h2>

            <div className="mt-8 space-y-10">
                {projects.map((project) => (
                    <div key={project.name} className="group">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{project.name}</h3>
                            <div className="flex gap-3 text-sm">
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                                    >
                                        Live ↗
                                    </a>
                                )}
                                {project.links.code && (
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-500 underline-offset-4 hover:underline dark:text-neutral-400"
                                    >
                                        Code ↗
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                            {project.description}
                        </p>
                        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">{project.tech}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
