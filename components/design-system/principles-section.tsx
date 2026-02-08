const PRINCIPLES = [
  {
    number: "01",
    title: "Innovative",
    description:
      "Good design is innovative. The possibilities for innovation are not exhausted. DeFi demands interfaces that push boundaries while remaining grounded.",
  },
  {
    number: "02",
    title: "Useful",
    description:
      "Good design makes a product useful. Every element serves a purpose. A swap interface with no unnecessary friction. A dashboard that reveals, not obscures.",
  },
  {
    number: "03",
    title: "Aesthetic",
    description:
      "Good design is aesthetic. The aesthetic quality of a product is integral to its usefulness. Beautiful financial data inspires confidence.",
  },
  {
    number: "04",
    title: "Understandable",
    description:
      "Good design makes a product understandable. Complex DeFi protocols simplified through clear visual hierarchy and intuitive information architecture.",
  },
  {
    number: "05",
    title: "Unobtrusive",
    description:
      "Good design is unobtrusive. Products fulfilling a purpose are like tools. The interface disappears; the user achieves their goal.",
  },
  {
    number: "06",
    title: "Honest",
    description:
      "Good design is honest. It does not make a product more innovative, powerful or valuable than it really is. Transparent fee structures. Clear risk indicators.",
  },
  {
    number: "07",
    title: "Long-lasting",
    description:
      "Good design is long-lasting. It avoids being fashionable and therefore never appears antiquated. Timeless interfaces that age with grace.",
  },
  {
    number: "08",
    title: "Thorough",
    description:
      "Good design is thorough down to the last detail. Nothing must be arbitrary. Every pixel, every transition, every state accounted for.",
  },
  {
    number: "09",
    title: "Environmentally friendly",
    description:
      "Good design is environmentally friendly. Efficient code, minimal bundle sizes, optimized render cycles. Performance is sustainability.",
  },
  {
    number: "10",
    title: "As little design as possible",
    description:
      "Less, but better. Back to purity, back to simplicity. Concentrate on the essential aspects. The interface should be invisible.",
  },
]

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="border-b border-border px-6 py-20 md:px-12 lg:px-20"
    >
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
            01
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Foundations
          </span>
        </div>
        <h2 className="font-pixel text-3xl tracking-tight text-foreground md:text-4xl">
          Ten Principles
        </h2>
        <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
          Dieter Fermi&apos;s timeless principles adapted for the decentralized
          finance ecosystem. Each principle informs every decision in this
          system.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-5">
        {PRINCIPLES.map((principle) => (
          <article
            key={principle.number}
            className="group flex flex-col gap-4 bg-background p-6 transition-colors hover:bg-card"
          >
            <span className="font-pixel text-2xl text-accent/30 transition-colors group-hover:text-accent">
              {principle.number}
            </span>
            <h3 className="text-sm font-medium tracking-tight text-foreground">
              {principle.title}
            </h3>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {principle.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
