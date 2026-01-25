import Image from 'next/image'

const experiences = [
    {
        company: '2 Cents Capital',
        role: 'FnO Platform Lead',
        period: 'Feb 2025 – Aug 2025',
        logo: '/2cents.png',
        description:
            'Owned the entire FnO backtest → live platform. Built broker-feed pipeline powering 1200+ containers at sub-70ms p95 latency. Led 6-member team — scaled infra, shipped CI/CD, observability, monitoring. Contributed to Valura.ai: CRM, CX, sales flows. Represented product at Money20/20, North Star, GITEX.',
    },
    {
        company: 'VT Capital Market',
        role: 'Trading Systems Developer',
        period: 'Mar 2024 – Aug 2024',
        logo: '/vtcapital.png',
        description:
            'Built MVP backtester, option-selling platforms, risk guardrails (30% drawdown reduction). First real exposure to system design, microservices, WebSocket management, containerization. Reverse engineered Bakinzo and rebuilt it for extended functionalities.',
    },
    {
        company: 'Resoenix Capital',
        role: 'Prop Trading Intern',
        period: 'Nov 2023 – Jan 2024',
        logo: '/resoenix.png',
        description:
            'Worked 1:1 with prop traders on Indian & US options + stat-arb strategies. Automated trading via IBKR, XTS Symphony, Kite APIs. Ran Rs. 10L capital → 12% return in 2 months with <7% drawdown.',
    },
]

export function ExperienceSection() {
    return (
        <section id="experience" className="mt-16">
            <h2 className="font-mono text-xl font-bold tracking-tight text-stone-900 dark:text-neutral-100">
                Experience.
            </h2>

            <div className="mt-6 space-y-4">
                {experiences.map((exp) => (
                    <article
                        key={exp.company}
                        className="rounded-xl border border-stone-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950 md:px-5 md:py-4"
                    >
                        <div className="flex gap-4">
                            {/* Company Logo */}
                            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-stone-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                                <Image
                                    src={exp.logo}
                                    alt={`${exp.company} logo`}
                                    width={40}
                                    height={40}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                {/* Header row */}
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                                    <h3 className="text-sm font-semibold text-stone-900 dark:text-neutral-100">
                                        {exp.company}
                                    </h3>
                                    <span className="shrink-0 self-start whitespace-nowrap rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 font-mono text-xs text-stone-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Role */}
                                <p className="mt-1 text-xs text-stone-600 dark:text-neutral-400">{exp.role}</p>

                                {/* Description */}
                                <p className="mt-2 text-xs leading-relaxed text-stone-600 dark:text-neutral-400">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
