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
        "overflow-hidden transition-all data-[ending-style]:animate-collapsible-close data-[starting-style]:animate-collapsible-close data-[open]:animate-collapsible-open",
        className
      )}
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
