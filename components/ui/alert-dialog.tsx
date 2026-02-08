import { AlertDialog as BaseAlertDialog } from "@base-ui/react/alert-dialog"
import { cn } from "@/lib/utils"

function AlertDialog(props: React.ComponentProps<typeof BaseAlertDialog.Root>) {
  return <BaseAlertDialog.Root {...props} />
}

function AlertDialogTrigger(props: React.ComponentProps<typeof BaseAlertDialog.Trigger>) {
  return <BaseAlertDialog.Trigger {...props} />
}

function AlertDialogContent({ className, children, ...props }: React.ComponentProps<typeof BaseAlertDialog.Popup>) {
  return (
    <BaseAlertDialog.Portal>
      <BaseAlertDialog.Backdrop className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm opacity-0 transition-opacity duration-150 data-[open]:opacity-100 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0" />
      <BaseAlertDialog.Popup
        className={cn(
          "fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 border border-border bg-card p-6 shadow-lg opacity-0 scale-[0.98] transition-[opacity,transform] duration-150 data-[open]:opacity-100 data-[open]:scale-100 data-[starting-style]:opacity-0 data-[starting-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[ending-style]:scale-[0.98]",
          className
        )}
        {...props}
      >
        {children}
      </BaseAlertDialog.Popup>
    </BaseAlertDialog.Portal>
  )
}

function AlertDialogTitle({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Title>) {
  return (
    <BaseAlertDialog.Title
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogDescription({ className, ...props }: React.ComponentProps<typeof BaseAlertDialog.Description>) {
  return (
    <BaseAlertDialog.Description
      className={cn("mt-2 text-xs text-muted-foreground", className)}
      {...props}
    />
  )
}

function AlertDialogClose(props: React.ComponentProps<typeof BaseAlertDialog.Close>) {
  return <BaseAlertDialog.Close {...props} />
}

export { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogClose }
