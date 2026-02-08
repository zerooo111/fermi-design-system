import { useState, useEffect } from "react"
import { ThemeSwitcher } from "./theme-switcher"

const NAV_ITEMS = [
  { label: "Principles", href: "#principles" },
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Components", href: "#components" },
  { label: "DeFi", href: "#defi" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            v1.0
          </span>
        </div>
      </div>
    </header>
  )
}
