export default function Home() {
  return (
    <main id="main-content" className="mx-auto max-w-xl px-4 pb-32 pt-6 md:px-6 lg:px-8">
      {/* Style Guide - Proving Design Tokens */}
      <article className="rounded-2xl border border-border bg-card p-4 shadow-sm md:p-6">
        <h1 className="text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl dark:text-neutral-50">
          Design System Preview
        </h1>

        <p className="mt-4 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
          This page demonstrates the design tokens extracted from reference sites. All styles use
          Tailwind classes matching the{' '}
          <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
            design-tokens.md
          </span>{' '}
          specification.
        </p>

        {/* Typography Section */}
        <section className="mt-8 p-4">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Typography.
          </h3>
          <div className="mt-3 space-y-2">
            <p className="text-xs text-neutral-600 dark:text-neutral-300">text-xs (12px)</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">text-sm (14px)</p>
            <p className="text-base text-neutral-600 dark:text-neutral-300">text-base (16px)</p>
            <p className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
              text-2xl (24px)
            </p>
            <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
              font-mono: 12:34:56
            </p>
          </div>
        </section>

        {/* Colors Section */}
        <section className="mt-6 p-4">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Colors.</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <div className="h-8 w-8 rounded bg-neutral-50 dark:bg-neutral-950" title="neutral-50" />
            <div
              className="h-8 w-8 rounded bg-neutral-100 dark:bg-neutral-900"
              title="neutral-100"
            />
            <div
              className="h-8 w-8 rounded bg-neutral-200 dark:bg-neutral-800"
              title="neutral-200"
            />
            <div
              className="h-8 w-8 rounded bg-neutral-600 dark:bg-neutral-400"
              title="neutral-600"
            />
            <div
              className="h-8 w-8 rounded bg-neutral-900 dark:bg-neutral-50"
              title="neutral-900"
            />
            <div className="h-8 w-8 rounded bg-yellow-200" title="accent" />
          </div>
        </section>

        {/* Components Section */}
        <section className="mt-6 p-4">
          <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Components.
          </h3>

          {/* Card */}
          <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3 md:px-5 md:py-3.5 dark:border-neutral-800 dark:bg-neutral-950">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Sample Card
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
              This card uses the exact token pattern from reference sites.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button className="h-6 w-20 rounded-sm bg-neutral-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200">
              Primary
            </button>
            <button className="flex h-6 w-6 items-center justify-center rounded-sm border border-neutral-200 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900">
              ✉
            </button>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
              React
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
              TypeScript
            </span>
            <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
              Next.js
            </span>
          </div>

          {/* Date badge */}
          <div className="mt-4">
            <span className="whitespace-nowrap rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-1 text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
              January 2026 – Present
            </span>
          </div>
        </section>

        {/* Spacing Demo */}
        <section className="mt-6 p-4">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Spacing.</h3>
          <div className="mt-3 flex gap-4">
            <div className="h-8 w-8 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-8 w-8 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-8 w-8 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">gap-4 (16px)</p>
        </section>
      </article>
    </main>
  )
}
