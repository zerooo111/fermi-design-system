export function Footer() {
  return (
    <footer className="px-6 py-20 md:px-12 lg:px-20">
      <div className="flex flex-col gap-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-pixel text-base font-bold tracking-[0.15em] text-foreground">
              Fermi Design System
            </span>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              A design system rooted in Dieter Rams&apos;s ten principles of
              good design. Purpose-built for decentralized finance.
            </p>
            <p className="font-mono text-[10px] text-muted-foreground/50">
              &quot;Weniger, aber besser&quot; &mdash; Less, but better.
            </p>
          </div>

          {/* Foundations */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Foundations
            </span>
            <nav className="flex flex-col gap-2" aria-label="Foundations links">
              {["Principles", "Colors", "Typography", "Spacing"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Components */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Components
            </span>
            <nav className="flex flex-col gap-2" aria-label="Component links">
              {["Buttons", "Inputs", "Cards", "Badges", "Tables"].map(
                (item) => (
                  <a
                    key={item}
                    href="#components"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item}
                  </a>
                ),
              )}
            </nav>
          </div>

          {/* DeFi */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              DeFi Patterns
            </span>
            <nav
              className="flex flex-col gap-2"
              aria-label="DeFi pattern links"
            >
              {[
                "Token Swap",
                "Token List",
                "Transactions",
                "Block Explorer",
              ].map((item) => (
                <a
                  key={item}
                  href="#defi"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <span className="font-mono text-[10px] text-muted-foreground/50">
            Built with precision. Designed to last.
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-muted-foreground/50">
              v1.0.0
            </span>
            <span className="font-mono text-[10px] text-muted-foreground/50">
              Geist Sans + Geist Mono + Geist Pixel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
