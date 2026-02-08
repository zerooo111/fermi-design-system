import { NumberField as BaseNumberField } from "@base-ui/react/number-field"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface NumberFieldProps extends React.ComponentProps<typeof BaseNumberField.Root> {}

function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <BaseNumberField.Root className={cn("flex flex-col gap-2", className)} {...props}>
      <BaseNumberField.Group className="flex items-center border border-border bg-card">
        <BaseNumberField.Decrement className="flex h-10 w-10 items-center justify-center border-r border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Minus className="h-3 w-3" />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input className="flex-1 bg-transparent px-4 py-2.5 text-center font-mono text-sm text-foreground focus:outline-none" />
        <BaseNumberField.Increment className="flex h-10 w-10 items-center justify-center border-l border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
          <Plus className="h-3 w-3" />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

export { NumberField }
