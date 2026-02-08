import { NumberField as BaseNumberField } from "@base-ui/react/number-field"
import { motion } from "motion/react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { springs } from "@/lib/motion"

interface NumberFieldProps extends React.ComponentProps<typeof BaseNumberField.Root> {}

function NumberField({ className, ...props }: NumberFieldProps) {
  return (
    <BaseNumberField.Root className={cn("flex flex-col gap-2", className)} {...props}>
      <BaseNumberField.Group className="flex items-stretch border border-border bg-card">
        <BaseNumberField.Decrement
          aria-label="Decrease value"
          className="flex w-9 shrink-0 items-center justify-center border-r border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-inset"
          render={
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={springs.snappy}
            />
          }
        >
          <Minus className="h-3 w-3" />
        </BaseNumberField.Decrement>
        <BaseNumberField.Input className="w-full min-w-0 bg-transparent px-3 py-2 text-center font-mono text-sm text-foreground outline-none" />
        <BaseNumberField.Increment
          aria-label="Increase value"
          className="flex w-9 shrink-0 items-center justify-center border-l border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-inset"
          render={
            <motion.button
              whileTap={{ scale: 0.9 }}
              transition={springs.snappy}
            />
          }
        >
          <Plus className="h-3 w-3" />
        </BaseNumberField.Increment>
      </BaseNumberField.Group>
    </BaseNumberField.Root>
  )
}

export { NumberField }
