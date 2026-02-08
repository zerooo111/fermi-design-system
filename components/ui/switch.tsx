import { Switch as BaseSwitch } from "@base-ui/react/switch"
import { motion } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { springs } from "@/lib/motion"

interface SwitchProps extends React.ComponentProps<typeof BaseSwitch.Root> {}

function Switch({ className, checked: controlledChecked, defaultChecked, onCheckedChange, ...props }: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false)
  const isControlled = controlledChecked !== undefined
  const checked = isControlled ? controlledChecked : internalChecked

  const handleCheckedChange: typeof onCheckedChange = (value, event) => {
    if (!isControlled) {
      setInternalChecked(value)
    }
    onCheckedChange?.(value, event)
  }

  return (
    <BaseSwitch.Root
      className={cn(
        "group relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border border-border bg-secondary transition-colors data-[checked]:bg-accent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      checked={controlledChecked}
      defaultChecked={defaultChecked}
      onCheckedChange={handleCheckedChange}
      {...props}
    >
      <BaseSwitch.Thumb
        className="pointer-events-none block h-3.5 w-3.5 bg-foreground"
        render={
          <motion.span
            animate={{ x: checked ? 18 : 3 }}
            transition={springs.snappy}
          />
        }
      />
    </BaseSwitch.Root>
  )
}

export { Switch }
