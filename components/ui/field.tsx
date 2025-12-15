import * as React from "react"
import { cn } from "@/lib/utils"

const Field = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("grid gap-2", className)} {...props} />
})
Field.displayName = "Field"

const FieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => {
  return (
    <fieldset ref={ref} className={cn("grid gap-4", className)} {...props} />
  )
})
FieldSet.displayName = "FieldSet"

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6",
        className
      )}
      {...props}
    />
  )
})
FieldGroup.displayName = "FieldGroup"

const FieldLegend = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement>
>(({ className, ...props }, ref) => {
  return (
    <legend
      ref={ref}
      className={cn(
        "text-base font-semibold leading-6 text-gray-900",
        className
      )}
      {...props}
    />
  )
})
FieldLegend.displayName = "FieldLegend"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "block text-sm font-medium leading-6 text-gray-900",
        className
      )}
      {...props}
    />
  )
})
FieldLabel.displayName = "FieldLabel"

const FieldControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("mt-2 sm:col-span-3", className)}
      {...props}
    />
  )
})
FieldControl.displayName = "FieldControl"

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-2 text-sm text-gray-500", className)}
      {...props}
    />
  )
})
FieldDescription.displayName = "FieldDescription"

const FieldError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn("mt-2 text-sm text-red-600", className)}
      {...props}
    />
  )
})
FieldError.displayName = "FieldError"

export {
  Field,
  FieldSet,
  FieldGroup,
  FieldLegend,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
}
