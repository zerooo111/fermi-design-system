import { Slider as BaseSlider } from "@base-ui/react/slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentProps<typeof BaseSlider.Root> {}

function Slider({ className, ...props }: SliderProps) {
  return (
    <BaseSlider.Root className={cn("relative flex w-full touch-none select-none items-center", className)} {...props}>
      <BaseSlider.Control className="flex w-full items-center">
        <BaseSlider.Track className="relative h-1.5 w-full grow bg-secondary">
          <BaseSlider.Indicator className="absolute h-full bg-accent" />
          <BaseSlider.Thumb className="block h-4 w-4 border border-border bg-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:ring-offset-background" />
        </BaseSlider.Track>
      </BaseSlider.Control>
    </BaseSlider.Root>
  )
}

export { Slider }
