const SPACING_SCALE = [
  { name: "1", px: "4px", class: "w-1" },
  { name: "2", px: "8px", class: "w-2" },
  { name: "3", px: "12px", class: "w-3" },
  { name: "4", px: "16px", class: "w-4" },
  { name: "6", px: "24px", class: "w-6" },
  { name: "8", px: "32px", class: "w-8" },
  { name: "12", px: "48px", class: "w-12" },
  { name: "16", px: "64px", class: "w-16" },
  { name: "20", px: "80px", class: "w-20" },
  { name: "24", px: "96px", class: "w-24" },
]

export function SpacingSection() {
  return (
    <section className="border-b border-border px-6 py-20 md:px-12 lg:px-20">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            06
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Foundations
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Grid & Spacing
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          A 4px base unit creates rhythm across every component. Consistent
          spacing creates visual order in data-dense interfaces.
        </p>
      </div>

      {/* Spacing scale visualization */}
      <div className="flex flex-col gap-3">
        {SPACING_SCALE.map((item) => (
          <div key={item.name} className="flex items-center gap-4">
            <span className="w-8 text-right font-mono text-[10px] text-muted-foreground">
              {item.name}
            </span>
            <div className={`h-3 bg-accent/60 ${item.class}`} />
            <span className="font-mono text-[10px] text-muted-foreground/60">
              {item.px}
            </span>
          </div>
        ))}
      </div>

      {/* Grid demo */}
      <div className="mt-12 flex flex-col gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Grid System
        </span>
        <div className="grid grid-cols-12 gap-px">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="flex h-16 items-end justify-center bg-secondary pb-2"
            >
              <span className="font-mono text-[10px] text-muted-foreground">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12 gap-px">
          <div className="col-span-3 flex h-10 items-center justify-center bg-accent/10">
            <span className="font-mono text-[10px] text-accent">3 cols</span>
          </div>
          <div className="col-span-6 flex h-10 items-center justify-center bg-accent/20">
            <span className="font-mono text-[10px] text-accent">6 cols</span>
          </div>
          <div className="col-span-3 flex h-10 items-center justify-center bg-accent/10">
            <span className="font-mono text-[10px] text-accent">3 cols</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-px">
          <div className="col-span-4 flex h-10 items-center justify-center bg-secondary">
            <span className="font-mono text-[10px] text-muted-foreground">
              4 cols
            </span>
          </div>
          <div className="col-span-4 flex h-10 items-center justify-center bg-secondary">
            <span className="font-mono text-[10px] text-muted-foreground">
              4 cols
            </span>
          </div>
          <div className="col-span-4 flex h-10 items-center justify-center bg-secondary">
            <span className="font-mono text-[10px] text-muted-foreground">
              4 cols
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
