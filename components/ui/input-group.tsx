import * as React from "react";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      InputGroup Content
    </div>
  );
});
InputGroup.displayName = "InputGroup";

export { InputGroup };
