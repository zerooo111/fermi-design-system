import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip"
import { cn } from "@/lib/utils"

function TooltipProvider(props: React.ComponentProps<typeof BaseTooltip.Provider>) {
  return <BaseTooltip.Provider {...props} />
}

function Tooltip(props: React.ComponentProps<typeof BaseTooltip.Root>) {
  return <BaseTooltip.Root {...props} />
}

function TooltipTrigger(props: React.ComponentProps<typeof BaseTooltip.Trigger>) {
  return <BaseTooltip.Trigger {...props} />
}

function TooltipContent({ className, children, ...props }: React.ComponentProps<typeof BaseTooltip.Popup>) {
  return (
    <BaseTooltip.Portal>
      <BaseTooltip.Positioner>
        <BaseTooltip.Popup
          className={cn(
            "z-50 border border-border bg-card px-3 py-1.5 font-mono text-[11px] text-foreground shadow-md",
            className
          )}
          {...props}
        >
          {children}
          <BaseTooltip.Arrow className="fill-card stroke-border" />
        </BaseTooltip.Popup>
      </BaseTooltip.Positioner>
    </BaseTooltip.Portal>
  )
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent }
