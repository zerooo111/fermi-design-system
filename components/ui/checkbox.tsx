import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox"
import { motion, AnimatePresence } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { springs } from "@/lib/motion"

interface CheckboxProps extends React.ComponentProps<typeof BaseCheckbox.Root> {}

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <BaseCheckbox.Root
      className={cn(
        "peer flex h-4 w-4 shrink-0 items-center justify-center border border-border bg-card transition-colors data-[checked]:bg-accent data-[checked]:border-accent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <BaseCheckbox.Indicator className="flex items-center justify-center text-accent-foreground">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={springs.bouncy}
          className="flex items-center justify-center"
        >
          <Check className="h-3 w-3" />
        </motion.span>
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  )
}

export { Checkbox }
