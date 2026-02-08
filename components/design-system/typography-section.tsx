const TYPE_SCALE = [
  {
    name: "Display",
    class: "font-pixel text-5xl md:text-7xl tracking-tight",
    sample: "$1,234,567.89",
    specs: "font-pixel / tracking-tight / text-7xl",
  },
  {
    name: "Heading 1",
    class: "font-pixel text-3xl md:text-4xl tracking-tight",
    sample: "Portfolio Overview",
    specs: "font-pixel / tracking-tight / text-4xl",
  },
  {
    name: "Heading 2",
    class: "text-xl md:text-2xl font-medium tracking-tight",
    sample: "Token Distribution",
    specs: "font-sans / font-medium / text-2xl",
  },
  {
    name: "Heading 3",
    class: "text-base md:text-lg font-medium",
    sample: "Transaction History",
    specs: "font-sans / font-medium / text-lg",
  },
  {
    name: "Body",
    class: "text-sm leading-relaxed",
    sample:
      "The decentralized exchange protocol enables trustless token swaps with minimal slippage and transparent fee structures.",
    specs: "font-sans / text-sm / leading-relaxed",
  },
  {
    name: "Caption",
    class: "text-xs text-muted-foreground",
    sample: "Last updated 2 minutes ago",
    specs: "font-sans / text-xs / text-muted-foreground",
  },
  {
    name: "Mono Data",
    class: "font-mono text-sm tabular-nums",
    sample: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
    specs: "font-mono / text-sm / tabular-nums",
  },
  {
    name: "Label",
    class:
      "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
    sample: "Gas Fee Estimate",
    specs: "font-mono / text-[11px] / uppercase / tracking-[0.2em]",
  },
]

export function TypographySection() {
  return (
    <section
      id="typography"
      className="border-b border-border px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            03
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Foundations
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Typography
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Three typefaces, each with a purpose. Geist Sans for body text. Geist
          Mono for data and addresses. Geist Pixel for display and headlines.
        </p>
      </div>

      {/* Font families */}
      <div className="mb-12 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        <div className="flex flex-col gap-4 bg-background p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Display
          </span>
          <span className="font-pixel text-4xl tracking-tight text-foreground">
            Geist Pixel
          </span>
          <span className="text-sm text-muted-foreground">
            Bitmap-inspired display typeface. Used for hero headlines, large
            numbers, and brand moments. Unapologetically digital.
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Square", "Grid", "Circle", "Triangle", "Line"].map((v) => (
              <span
                key={v}
                className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-background p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Primary
          </span>
          <span className="text-4xl font-extralight tracking-tight text-foreground">
            Geist Sans
          </span>
          <span className="text-sm text-muted-foreground">
            Clean geometric sans-serif by Vercel. Optimized for screen
            readability at all sizes. Used for body copy, headings, and UI
            elements.
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Thin", "Light", "Regular", "Medium", "Bold", "Black"].map(
              (w) => (
                <span
                  key={w}
                  className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {w}
                </span>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-background p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Monospace
          </span>
          <span className="font-mono text-4xl font-extralight tracking-tight text-foreground">
            Geist Mono
          </span>
          <span className="text-sm text-muted-foreground">
            Monospaced typeface for code, addresses, and numerical data.
            Tabular figures ensure perfect column alignment in financial tables.
          </span>
          <div className="mt-2 flex flex-wrap gap-2">
            {["Light", "Regular", "Medium", "Bold"].map((w) => (
              <span
                key={w}
                className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div className="flex flex-col gap-px bg-border">
        {TYPE_SCALE.map((item) => (
          <div
            key={item.name}
            className="grid grid-cols-1 gap-4 bg-background p-6 md:grid-cols-[140px_1fr_1fr] md:items-center md:gap-8"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-foreground">
                {item.name}
              </span>
              <span className="hidden font-mono text-[10px] text-muted-foreground/60 md:block">
                {item.specs}
              </span>
            </div>
            <div className={`${item.class} truncate text-foreground`}>
              {item.sample}
            </div>
            <span className="font-mono text-[10px] text-muted-foreground/60 md:hidden">
              {item.specs}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
