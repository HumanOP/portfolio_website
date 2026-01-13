import { Nav, Footer } from '@/components/layout'
import {
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <Nav />
      </header>

      <main id="main-content" className="mx-auto max-w-2xl px-6 pb-16 md:px-8">
        <HeroSection />

        {/* Bio paragraph */}
        <p className="mt-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Builder at the intersection of product, engineering, and markets. I don&apos;t just code
          systems — I obsess over <em>why</em> they exist and <em>who</em> they serve. Currently
          exploring product management, full-stack development, and trading infrastructure.
        </p>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  )
}
