import { Select as BaseSelect } from "@base-ui/react/select"
import { ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

function Select(props: React.ComponentProps<typeof BaseSelect.Root>) {
  return <BaseSelect.Root {...props} />
}

function SelectTrigger({ className, children, ...props }: React.ComponentProps<typeof BaseSelect.Trigger>) {
  return (
    <BaseSelect.Trigger
      className={cn(
        "flex items-center justify-between border border-border bg-card px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <BaseSelect.Icon>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </BaseSelect.Icon>
    </BaseSelect.Trigger>
  )
}

function SelectPopup({ className, children, ...props }: React.ComponentProps<typeof BaseSelect.Popup>) {
  return (
    <BaseSelect.Portal>
      <BaseSelect.Positioner>
        <BaseSelect.Popup
          className={cn(
            "z-50 border border-border bg-card p-1 shadow-lg opacity-0 translate-y-1 transition-[opacity,transform] duration-150 data-[open]:opacity-100 data-[open]:translate-y-0 data-[starting-style]:opacity-0 data-[starting-style]:translate-y-1 data-[ending-style]:opacity-0 data-[ending-style]:translate-y-1",
            className
          )}
          {...props}
        >
          {children}
        </BaseSelect.Popup>
      </BaseSelect.Positioner>
    </BaseSelect.Portal>
  )
}

function SelectItem({ className, children, ...props }: React.ComponentProps<typeof BaseSelect.Item>) {
  return (
    <BaseSelect.Item
      className={cn(
        "flex items-center gap-2 px-3 py-2 text-sm text-foreground outline-none cursor-pointer transition-colors data-[highlighted]:bg-secondary",
        className
      )}
      {...props}
    >
      <BaseSelect.ItemIndicator className="flex h-4 w-4 items-center justify-center">
        <Check className="h-3 w-3" />
      </BaseSelect.ItemIndicator>
      <BaseSelect.ItemText>{children}</BaseSelect.ItemText>
    </BaseSelect.Item>
  )
}

function SelectValue(props: React.ComponentProps<typeof BaseSelect.Value>) {
  return <BaseSelect.Value {...props} />
}

export { Select, SelectTrigger, SelectPopup, SelectItem, SelectValue }
