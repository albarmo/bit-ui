import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonGroupVariants = cva("flex items-center", {
  variants: {
    orientation: {
      horizontal: "space-x-2",
      vertical: "flex-col space-y-2",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
})

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
      />
    )
  }
)
ButtonGroup.displayName = "ButtonGroup"

export { ButtonGroup, buttonGroupVariants }
