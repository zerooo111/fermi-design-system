import { useState, useRef, useEffect } from "react"
import { useTheme, THEMES } from "../../hooks/use-theme"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = THEMES.find((t) => t.id === theme)!

  useEffect(() => {
    if (!open) return

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-border bg-card px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: `hsl(${current.accent})` }}
        />
        {current.label}
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-40 border border-border bg-card p-1 shadow-lg">
          {THEMES.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id)
                setOpen(false)
              }}
              className={`flex w-full items-center gap-2.5 px-2.5 py-2 font-mono text-[11px] tracking-wide transition-colors ${
                t.id === theme
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <span
                className="h-3 w-3 rounded-full ring-1 ring-white/10"
                style={{ backgroundColor: `hsl(${t.accent})` }}
              />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
