import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group"
import { Radio as BaseRadio } from "@base-ui/react/radio"
import { cn } from "@/lib/utils"

interface RadioGroupProps extends React.ComponentProps<typeof BaseRadioGroup> {}

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <BaseRadioGroup
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

interface RadioProps extends React.ComponentProps<typeof BaseRadio.Root> {}

function Radio({ className, ...props }: RadioProps) {
  return (
    <BaseRadio.Root
      className={cn(
        "flex h-4 w-4 items-center justify-center border border-border bg-card transition-colors data-[checked]:border-accent",
        className
      )}
      {...props}
    >
      <BaseRadio.Indicator className="h-2 w-2 bg-accent" />
    </BaseRadio.Root>
  )
}

export { RadioGroup, Radio }
