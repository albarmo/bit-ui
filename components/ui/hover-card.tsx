import * as React from "react";

const HoverCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      HoverCard Content
    </div>
  );
});
HoverCard.displayName = "HoverCard";

export { HoverCard };
