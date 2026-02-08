import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between border-b border-border px-6 pb-12 pt-32 md:px-12 lg:px-20">
      {/* Grid pattern overlay */}
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-20" />

      {/* Smoky green ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-success/5 blur-[150px]" />
        <div className="absolute top-1/3 -right-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-8 pt-12 md:pt-20">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Design System v1.0
          </span>
        </div>

        <h1 className="max-w-5xl text-balance font-pixel text-5xl leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-[6.5rem]">
          Less, but
          <br />
          <span className="text-accent">better.</span>
        </h1>

        <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          A design system rooted in Dieter Fermi&apos;s ten principles of good
          design. Built for precision, clarity, and trust in decentralized
          finance applications.
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "Innovative",
            "Useful",
            "Aesthetic",
            "Understandable",
            "Honest",
          ].map((principle) => (
            <span
              key={principle}
              className="border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground"
            >
              {principle}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-pixel text-sm uppercase tracking-[0.1em] text-muted-foreground">
            FERMI
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/60">
            For DeFi Applications
          </span>
        </div>
        <button
          type="button"
          onClick={() =>
            document
              .getElementById("principles")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Scroll to principles"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.15em]">
            Explore
          </span>
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  )
}
