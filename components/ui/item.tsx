import * as React from "react"
import { cn } from "@/lib/utils"

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-b p-4", className)}
      {...props}
    />
  )
})
Item.displayName = "Item"

export { Item }
