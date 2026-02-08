import { cn } from "@/lib/utils"

function DocSection({
  title,
  description,
  children,
  className,
}: {
  title: string
  description: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-pixel text-lg tracking-tight text-foreground">
          {title}
        </h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      {children}
    </div>
  )
}

function DocExample({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <div
        className={cn(
          "border border-border bg-card/50 p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

function DocVariants({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <div
        className={cn(
          "flex flex-wrap items-center gap-3 border border-border bg-card/50 p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export { DocSection, DocExample, DocVariants }
