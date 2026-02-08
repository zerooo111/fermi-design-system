const COLOR_GROUPS = [
  {
    title: "Core",
    colors: [
      { name: "Background", token: "background", hsl: "150 30% 3.5%", class: "bg-background" },
      { name: "Foreground", token: "foreground", hsl: "45 40% 88%", class: "bg-foreground" },
      { name: "Card", token: "card", hsl: "150 25% 6%", class: "bg-card" },
      { name: "Border", token: "border", hsl: "150 15% 12%", class: "bg-border" },
    ],
  },
  {
    title: "Neutrals",
    colors: [
      { name: "Secondary", token: "secondary", hsl: "150 20% 9%", class: "bg-secondary" },
      { name: "Muted", token: "muted", hsl: "150 18% 10%", class: "bg-muted" },
      { name: "Muted FG", token: "muted-foreground", hsl: "150 8% 45%", class: "bg-muted-foreground" },
      { name: "Secondary FG", token: "secondary-foreground", hsl: "45 20% 72%", class: "bg-secondary-foreground" },
    ],
  },
  {
    title: "Semantic",
    colors: [
      { name: "Accent", token: "accent", hsl: "45 55% 68%", class: "bg-accent" },
      { name: "Success", token: "success", hsl: "152 55% 42%", class: "bg-success" },
      { name: "Destructive", token: "destructive", hsl: "0 65% 52%", class: "bg-destructive" },
      { name: "Ring", token: "ring", hsl: "45 55% 68%", class: "bg-ring" },
    ],
  },
]

export function ColorsSection() {
  return (
    <section id="colors" className="border-b border-border px-6 py-20 md:px-12 lg:px-20">
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            02
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Foundations
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Color System
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          A forest-toned palette built for data density and long reading
          sessions. Deep greens ground the interface. Warm cream guides the
          eye.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {COLOR_GROUPS.map((group) => (
          <div key={group.title} className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {group.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {group.colors.map((color) => (
                <div
                  key={color.token}
                  className="flex flex-col gap-3 border border-border bg-background p-4"
                >
                  <div
                    className={`h-16 w-full ${color.class} border border-border`}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-medium text-foreground">
                      {color.name}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      --{color.token}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60">
                      {color.hsl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Usage example */}
      <div className="mt-16 flex flex-col gap-4">
        <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Semantic Usage
        </h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <div className="flex items-center gap-3 border border-border bg-background p-5">
            <div className="h-3 w-3 rounded-full bg-success" />
            <span className="font-mono text-sm text-success">+12.45%</span>
            <span className="ml-auto font-mono text-[10px] text-muted-foreground">
              Positive change
            </span>
          </div>
          <div className="flex items-center gap-3 border border-border bg-background p-5">
            <div className="h-3 w-3 rounded-full bg-destructive" />
            <span className="font-mono text-sm text-destructive">-3.21%</span>
            <span className="ml-auto font-mono text-[10px] text-muted-foreground">
              Negative change
            </span>
          </div>
          <div className="flex items-center gap-3 border border-border bg-background p-5">
            <div className="h-3 w-3 rounded-full bg-accent" />
            <span className="text-sm text-accent">Pending</span>
            <span className="ml-auto font-mono text-[10px] text-muted-foreground">
              Attention state
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
