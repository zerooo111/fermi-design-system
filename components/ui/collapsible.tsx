import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible"
import { cn } from "@/lib/utils"

function Collapsible(props: React.ComponentProps<typeof BaseCollapsible.Root>) {
  return <BaseCollapsible.Root {...props} />
}

function CollapsibleTrigger(props: React.ComponentProps<typeof BaseCollapsible.Trigger>) {
  return <BaseCollapsible.Trigger {...props} />
}

function CollapsibleContent({ className, ...props }: React.ComponentProps<typeof BaseCollapsible.Panel>) {
  return (
    <BaseCollapsible.Panel
      className={cn(
        "overflow-hidden h-[var(--collapsible-panel-height)] transition-[height] duration-200 ease-out data-[starting-style]:h-0 data-[ending-style]:h-0",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
