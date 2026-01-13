import {
    SiPython,
    SiTypescript,
    SiCplusplus,
    SiJavascript,
    SiPostgresql,
    SiRedis,
    SiDocker,
    SiKubernetes,
    SiArgo,
    SiApachekafka,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiFastapi,
} from 'react-icons/si'
// Using generic icons for trading/product where specific brand icons might be missing or less recognizable
import { FiTrendingUp, FiBox, FiActivity, FiGlobe, FiMap, FiTerminal } from 'react-icons/fi'

const skillGroups = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', icon: SiPython },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'C++', icon: SiCplusplus },
            { name: 'JavaScript', icon: SiJavascript },
            { name: 'SQL', icon: FiActivity }, // SQL usually generic
        ],
    },
    {
        category: 'Frameworks',
        skills: [
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'React', icon: SiReact },
            { name: 'Next.js', icon: SiNextdotjs },
        ],
    },
    {
        category: 'Infrastructure',
        skills: [
            { name: 'Docker', icon: SiDocker },
            { name: 'Kubernetes', icon: SiKubernetes },
            { name: 'Argo CD', icon: SiArgo },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'Redis', icon: SiRedis },
            { name: 'Kafka', icon: SiApachekafka },
        ],
    },
    {
        category: 'Trading APIs',
        skills: [
            { name: 'IBKR', icon: FiTrendingUp },
            { name: 'Kite-Connect', icon: FiTrendingUp },
            { name: 'XTS Symphony', icon: FiTrendingUp },
            { name: 'Bakinzo', icon: FiTrendingUp },
            { name: 'MT5', icon: FiTrendingUp },
        ],
    },
    {
        category: 'Product',
        skills: [
            { name: 'Customer Discovery', icon: FiGlobe },
            { name: 'PRD/JTBD', icon: FiBox },
            { name: 'GTM Strategy', icon: FiMap },
            { name: 'Roadmapping', icon: FiTerminal },
        ],
    },
]

export function SkillsSection() {
    return (
        <section id="skills" className="mt-16">
            <div className="flex items-center justify-between">
                <h2 className="font-mono text-xl font-bold tracking-tight text-stone-900 dark:text-neutral-100">
                    Skills
                </h2>
            </div>

            <div className="mt-8 space-y-8">
                {skillGroups.map((group) => (
                    <div key={group.category}>
                        <h3 className="mb-4 font-mono text-sm font-medium text-muted-foreground">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {group.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="group flex cursor-default items-center gap-2 rounded border border-stone-200 bg-stone-50 px-3 py-1.5 transition-colors duration-300 hover:bg-stone-200 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:bg-neutral-800"
                                >
                                    <skill.icon className="h-4 w-4 text-stone-500 transition-colors group-hover:text-stone-900 dark:text-neutral-500 dark:group-hover:text-neutral-200" />
                                    <span className="font-mono text-sm text-stone-600 transition-colors group-hover:text-stone-900 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
