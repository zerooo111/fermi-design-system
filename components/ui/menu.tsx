import { Menu as BaseMenu } from "@base-ui/react/menu"
import { cn } from "@/lib/utils"

function Menu(props: React.ComponentProps<typeof BaseMenu.Root>) {
  return <BaseMenu.Root {...props} />
}

function MenuTrigger(props: React.ComponentProps<typeof BaseMenu.Trigger>) {
  return <BaseMenu.Trigger {...props} />
}

function MenuContent({ className, children, ...props }: React.ComponentProps<typeof BaseMenu.Popup>) {
  return (
    <BaseMenu.Portal>
      <BaseMenu.Positioner>
        <BaseMenu.Popup
          className={cn(
            "z-50 min-w-[180px] border border-border bg-card p-1 shadow-lg",
            className
          )}
          {...props}
        >
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}

function MenuItem({ className, ...props }: React.ComponentProps<typeof BaseMenu.Item>) {
  return (
    <BaseMenu.Item
      className={cn(
        "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-foreground outline-none transition-colors data-[highlighted]:bg-secondary",
        className
      )}
      {...props}
    />
  )
}

function MenuSeparator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("my-1 h-px bg-border", className)} {...props} />
}

function MenuSubmenu(props: React.ComponentProps<typeof BaseMenu.SubmenuRoot>) {
  return <BaseMenu.SubmenuRoot {...props} />
}

function MenuSubmenuTrigger({ className, ...props }: React.ComponentProps<typeof BaseMenu.SubmenuTrigger>) {
  return (
    <BaseMenu.SubmenuTrigger
      className={cn(
        "flex cursor-pointer items-center justify-between gap-2 px-3 py-2 text-sm text-foreground outline-none transition-colors data-[highlighted]:bg-secondary",
        className
      )}
      {...props}
    />
  )
}

export { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator, MenuSubmenu, MenuSubmenuTrigger }
