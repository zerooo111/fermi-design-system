import { Form as BaseForm } from "@base-ui/react/form"
import { cn } from "@/lib/utils"

interface FormProps extends React.ComponentProps<typeof BaseForm> {}

function Form({ className, ...props }: FormProps) {
  return (
    <BaseForm
      className={cn("flex flex-col gap-4", className)}
      {...props}
    />
  )
}

export { Form }
