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
          A developer who builds efficient, scalable, and intuitive applications. Focused on
          backend systems, trading infrastructure, and product development.
        </p>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  )
}
