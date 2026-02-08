import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group"
import { cn } from "@/lib/utils"

interface ToggleGroupProps extends React.ComponentProps<typeof BaseToggleGroup> {}

function ToggleGroup({ className, ...props }: ToggleGroupProps) {
  return (
    <BaseToggleGroup
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  )
}

export { ToggleGroup }
