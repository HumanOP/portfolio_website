import { Nav, Footer } from '@/components/layout'
import {
  HeroSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/sections'
import { ScrollToTop, LoadingScreen } from '@/components/ui'

export default function Home() {
  return (
    <>
      <LoadingScreen />

      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <Nav />
      </header>

      {/* Dashed border frame container */}
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-6">
        <div className="rounded-lg border-2 border-dashed border-neutral-300 p-6 md:p-10 dark:border-neutral-700">
          <main id="main-content" className="mx-auto max-w-2xl">
            {/* Hero Section */}
            <div className="animate-fade-in">
              <HeroSection />
            </div>

            {/* Bio paragraph */}
            <p className="animate-fade-in-delay-1 mt-8 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              Builder at the intersection of product, engineering, and markets. I don&apos;t just
              code systems — I obsess over <em>why</em> they exist and <em>who</em> they serve.
              Currently exploring product management, full-stack development, and trading
              infrastructure.
            </p>

            {/* Sections with staggered animation */}
            <div className="animate-fade-in-delay-2">
              <ExperienceSection />
            </div>

            <div className="animate-fade-in-delay-3">
              <ProjectsSection />
            </div>

            <div className="animate-fade-in-delay-4">
              <SkillsSection />
            </div>
          </main>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </>
  )
}
