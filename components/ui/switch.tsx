import { Switch as BaseSwitch } from "@base-ui/react/switch"
import { cn } from "@/lib/utils"

interface SwitchProps extends React.ComponentProps<typeof BaseSwitch.Root> {}

function Switch({ className, ...props }: SwitchProps) {
  return (
    <BaseSwitch.Root
      className={cn(
        "group relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border border-border bg-secondary transition-colors data-[checked]:bg-accent disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <BaseSwitch.Thumb
        className="pointer-events-none block h-4 w-4 bg-foreground transition-transform translate-x-0 group-data-[checked]:translate-x-4"
      />
    </BaseSwitch.Root>
  )
}

export { Switch }
