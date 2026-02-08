import { Toggle as BaseToggle } from "@base-ui/react/toggle"
import { motion } from "motion/react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { springs } from "@/lib/motion"

const MotionBaseToggle = motion.create(BaseToggle)

const toggleVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-secondary data-[pressed]:text-foreground",
  {
    variants: {
      variant: {
        default: "border border-border bg-transparent text-muted-foreground hover:bg-card hover:text-foreground",
        ghost: "bg-transparent text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-9 px-3",
        lg: "h-10 px-4",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

interface ToggleProps
  extends React.ComponentProps<typeof BaseToggle>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <MotionBaseToggle
      className={cn(toggleVariants({ variant, size, className }))}
      whileTap={{ scale: 0.95 }}
      transition={springs.snappy}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
