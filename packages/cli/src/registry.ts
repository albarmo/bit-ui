export const registry: Record<string, { dependencies: string[]; devDependencies?: string[] }> = {
  // --- PRIMITIVES (No Dependencies) ---
  button: {
    dependencies: ["@radix-ui/react-slot"],
    devDependencies: [],
  },
  badge: {
    dependencies: ["class-variance-authority"],
    devDependencies: [],
  },
  card: {
    dependencies: [],
    devDependencies: [],
  },
  input: {
    dependencies: [],
    devDependencies: [],
  },
  textarea: {
    dependencies: [],
    devDependencies: [],
  },
  skeleton: {
    dependencies: [],
    devDependencies: [],
  },
  
  // --- RADIX UI COMPONENTS ---
  accordion: {
    dependencies: ["@radix-ui/react-accordion", "lucide-react"],
    devDependencies: [],
  },
  "alert-dialog": {
    dependencies: ["@radix-ui/react-alert-dialog"],
    devDependencies: [],
  },
  "aspect-ratio": {
    dependencies: ["@radix-ui/react-aspect-ratio"],
    devDependencies: [],
  },
  avatar: {
    dependencies: ["@radix-ui/react-avatar"],
    devDependencies: [],
  },
  checkbox: {
    dependencies: ["@radix-ui/react-checkbox", "lucide-react"],
    devDependencies: [],
  },
  collapsible: {
    dependencies: ["@radix-ui/react-collapsible"],
    devDependencies: [],
  },
  "context-menu": {
    dependencies: ["@radix-ui/react-context-menu"],
    devDependencies: [],
  },
  dialog: {
    dependencies: ["@radix-ui/react-dialog", "lucide-react"],
    devDependencies: [],
  },
  "dropdown-menu": {
    dependencies: ["@radix-ui/react-dropdown-menu", "lucide-react"],
    devDependencies: [],
  },
  "hover-card": {
    dependencies: ["@radix-ui/react-hover-card"],
    devDependencies: [],
  },
  label: {
    dependencies: ["@radix-ui/react-label"],
    devDependencies: [],
  },
  menubar: {
    dependencies: ["@radix-ui/react-menubar"],
    devDependencies: [],
  },
  "navigation-menu": {
    dependencies: ["@radix-ui/react-navigation-menu"],
    devDependencies: [],
  },
  popover: {
    dependencies: ["@radix-ui/react-popover"],
    devDependencies: [],
  },
  progress: {
    dependencies: ["@radix-ui/react-progress"],
    devDependencies: [],
  },
  "radio-group": {
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    devDependencies: [],
  },
  "scroll-area": {
    dependencies: ["@radix-ui/react-scroll-area"],
    devDependencies: [],
  },
  select: {
    dependencies: ["@radix-ui/react-select", "lucide-react"],
    devDependencies: [],
  },
  separator: {
    dependencies: ["@radix-ui/react-separator"],
    devDependencies: [],
  },
  slider: {
    dependencies: ["@radix-ui/react-slider"],
    devDependencies: [],
  },
  switch: {
    dependencies: ["@radix-ui/react-switch"],
    devDependencies: [],
  },
  tabs: {
    dependencies: ["@radix-ui/react-tabs"],
    devDependencies: [],
  },
  toast: {
    dependencies: ["@radix-ui/react-toast"],
    devDependencies: [],
  },
  toggle: {
    dependencies: ["@radix-ui/react-toggle"],
    devDependencies: [],
  },
  "toggle-group": {
    dependencies: ["@radix-ui/react-toggle-group"],
    devDependencies: [],
  },
  tooltip: {
    dependencies: ["@radix-ui/react-tooltip"],
    devDependencies: [],
  },

  // --- SPECIAL LIBRARIES ---
  calendar: {
    dependencies: ["react-day-picker", "date-fns"],
    devDependencies: [],
  },
  command: {
    dependencies: ["cmdk", "lucide-react"],
    devDependencies: [],
  },
  combobox: {
    dependencies: ["cmdk", "lucide-react"],
    devDependencies: [],
  },
  form: {
    dependencies: ["@radix-ui/react-label", "@radix-ui/react-slot", "react-hook-form", "zod", "@hookform/resolvers"],
    devDependencies: [],
  },
  carousel: {
    dependencies: ["embla-carousel-react"],
    devDependencies: [],
  },
  chart: {
    dependencies: ["recharts"],
    devDependencies: [],
  },
  "input-otp": {
    dependencies: ["input-otp"],
    devDependencies: [],
  },
  resizable: {
    dependencies: ["react-resizable-panels"],
    devDependencies: [],
  },
  sonner: {
    dependencies: ["sonner", "next-themes"],
    devDependencies: [],
  },
  drawer: {
    dependencies: ["vaul"],
    devDependencies: [],
  },
};