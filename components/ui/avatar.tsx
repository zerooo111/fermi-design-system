import { Avatar as BaseAvatar } from "@base-ui/react/avatar"
import { cn } from "@/lib/utils"

interface AvatarProps extends React.ComponentProps<typeof BaseAvatar.Root> {}

function Avatar({ className, ...props }: AvatarProps) {
  return (
    <BaseAvatar.Root
      className={cn(
        "relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden bg-secondary",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof BaseAvatar.Image>) {
  return (
    <BaseAvatar.Image
      className={cn("aspect-square h-full w-full object-cover", className)}
      {...props}
    />
  )
}

function AvatarFallback({ className, ...props }: React.ComponentProps<typeof BaseAvatar.Fallback>) {
  return (
    <BaseAvatar.Fallback
      className={cn(
        "flex h-full w-full items-center justify-center bg-secondary font-mono text-[10px] font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
