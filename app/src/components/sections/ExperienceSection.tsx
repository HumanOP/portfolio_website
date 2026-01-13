const experiences = [
    {
        company: '2 Cents Capital',
        role: 'FnO Platform Lead',
        period: 'Feb 2025 – Aug 2025',
        description:
            'Owned the entire FnO backtest → live platform. Built broker-feed pipeline powering 1200+ containers at sub-70ms p95 latency. Led 6-member team — scaled infra, shipped CI/CD, observability, monitoring. Contributed to Valura.ai: CRM, CX, sales flows. Represented product at Money20/20, North Star, GITEX.',
    },
    {
        company: 'VT Capital Market',
        role: 'Trading Systems Developer',
        period: 'Mar 2024 – Aug 2024',
        description:
            'Built MVP backtester, option-selling platforms, risk guardrails (30% drawdown reduction). First real exposure to system design, microservices, WebSocket management, containerization. Reverse engineered Bakinzo and rebuilt it for extended functionalities.',
    },
    {
        company: 'Resoenix Capital',
        role: 'Prop Trading Intern',
        period: 'Nov 2023 – Jan 2024',
        description:
            'Worked 1:1 with prop traders on Indian & US options + stat-arb strategies. Automated trading via IBKR, XTS Symphony, Kite APIs. Ran Rs. 10L capital → 12% return in 2 months with <7% drawdown.',
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="mt-16">
            <h2 className="font-mono text-xl font-bold tracking-tight text-stone-900 dark:text-neutral-100">Experience</h2>

            <div className="mt-8 space-y-10">
                {experiences.map((exp) => (
                    <div key={exp.company} className="group">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                            <h3 className="font-medium text-stone-900 dark:text-neutral-100">{exp.company}</h3>
                            <span className="font-mono text-sm text-stone-500 dark:text-neutral-400">{exp.period}</span>
                        </div>
                        <p className="mt-1 text-sm text-stone-600 dark:text-neutral-400">{exp.role}</p>
                        <p className="mt-3 leading-relaxed text-stone-600 dark:text-neutral-400">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
