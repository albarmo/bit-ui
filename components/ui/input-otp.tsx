import * as React from "react";

const InputOtp = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      InputOtp Content
    </div>
  );
});
InputOtp.displayName = "InputOtp";

export { InputOtp };
