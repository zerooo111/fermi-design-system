import { Meter as BaseMeter } from "@base-ui/react/meter"
import { cn } from "@/lib/utils"

interface MeterProps extends React.ComponentProps<typeof BaseMeter.Root> {
  showValue?: boolean
}

function Meter({ className, showValue, ...props }: MeterProps) {
  return (
    <BaseMeter.Root className={cn("flex flex-col gap-2", className)} {...props}>
      {showValue && (
        <div className="flex items-center justify-between">
          <BaseMeter.Label className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground" />
          <BaseMeter.Value className="font-mono text-[10px] text-foreground" />
        </div>
      )}
      <BaseMeter.Track className="relative h-1.5 w-full overflow-hidden bg-secondary">
        <BaseMeter.Indicator className="h-full bg-accent transition-all" />
      </BaseMeter.Track>
    </BaseMeter.Root>
  )
}

export { Meter }
