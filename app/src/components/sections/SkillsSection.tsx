const skills = {
    languages: 'Python · TypeScript · C++ · JavaScript · SQL',
    frameworks: 'FastAPI · Node.js · React · Next.js',
    infrastructure: 'Docker · Kubernetes · Argo CD · PostgreSQL · Redis · Kafka',
    trading: 'IBKR · Kite-Connect · XTS Symphony · Bakinzo · MT5',
    product: 'Customer Discovery · PRD/JTBD · GTM Strategy · Roadmap Prioritization',
}

export function SkillsSection() {
    return (
        <section id="skills" className="mt-16">
            <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Skills</h2>

            <div className="mt-6 space-y-4">
                <div>
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Languages</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{skills.languages}</p>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Frameworks</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{skills.frameworks}</p>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Infrastructure
                    </h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{skills.infrastructure}</p>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Trading APIs
                    </h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{skills.trading}</p>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Product</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">{skills.product}</p>
                </div>
            </div>
        </section>
    )
}
