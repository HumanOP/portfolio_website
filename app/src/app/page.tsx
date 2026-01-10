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
      <header className="sticky top-0 z-10 bg-background/80 pt-6 backdrop-blur-sm">
        <Nav />
      </header>

      <main id="main-content" className="mx-auto max-w-xl pb-32">
        <article
          className="rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          aria-label="Portfolio"
        >
          <HeroSection />

          {/* Bio paragraph placeholder */}
          <div className="m-2 mt-4 items-center justify-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
            <p>
              A developer who loves building{' '}
              <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                efficient
              </span>
              ,{' '}
              <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                scalable
              </span>
              , and{' '}
              <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                intuitive
              </span>{' '}
              applications.
            </p>
          </div>

          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
        </article>
      </main>

      <Footer />
    </>
  )
}
