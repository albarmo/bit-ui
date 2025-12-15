import Link from "next/link";
import { 
  Type, MousePointer2, Layout, AppWindow, CreditCard, 
  Loader2, Maximize, Scroll, Minus, PanelLeft, 
  Square, GripVertical, Ghost,
  
  CheckSquare, ToggleLeft, MoreHorizontal, SquarePen, 
  Calendar, ChevronsUpDown, Keyboard, MousePointerClick,
  ListFilter, FormInput, AlignJustify, CircleDot,
  ArrowDownSquare, SlidersHorizontal, TextCursorInput,
  
  Menu, ChevronRight, Compass, GalleryHorizontal, 
  PanelTop, SplitSquareHorizontal, Layers,
  
  BellRing, MessageSquare, AlertTriangle, AlertOctagon,
  PanelBottom, Sidebar as SidebarIcon, Sticker,
  
  Table2, BarChart3, User, Search, ChevronDown,
  Tag, Command as CommandIcon, List, FileSpreadsheet,
  
  Search as SearchIcon, ArrowRight, Sparkles, FolderOpen
} from "lucide-react";

interface ComponentItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  badge?: "New" | "Beta" | "Updated";
}

interface CategorySection {
  title: string;
  items: ComponentItem[];
}

const componentsData: CategorySection[] = [
  {
    title: "Foundation",
    items: [
      {
        title: "Button",
        description: "Interactive element for user actions.",
        href: "/docs/components/button",
        icon: <MousePointer2 className="w-5 h-5" />,
      },
      {
        title: "Typography",
        description: "Styles for headings, paragraphs, and lists.",
        href: "/docs/components/typography",
        icon: <Type className="w-5 h-5" />,
      },
      {
        title: "Badge",
        description: "Status indicator or label.",
        href: "/docs/components/badge",
        icon: <Tag className="w-5 h-5" />,
      },
      {
        title: "Kbd",
        description: "Keyboard shortcut indicator.",
        href: "/docs/components/kbd",
        icon: <Keyboard className="w-5 h-5" />,
      },
      {
        title: "Spinner",
        description: "Loading indicator for async states.",
        href: "/docs/components/spinner",
        icon: <Loader2 className="w-5 h-5" />,
      },
      {
        title: "Item",
        description: "Generic list item wrapper.",
        href: "/docs/components/item",
        icon: <Square className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Layout & Structure",
    items: [
      {
        title: "Aspect Ratio",
        description: "Displays content within a desired ratio.",
        href: "/docs/components/aspect-ratio",
        icon: <Maximize className="w-5 h-5" />,
      },
      {
        title: "Card",
        description: "Container for grouping related content.",
        href: "/docs/components/card",
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: "Separator",
        description: "Visual divider for content sections.",
        href: "/docs/components/separator",
        icon: <Minus className="w-5 h-5" />,
      },
      {
        title: "Resizable",
        description: "Resizable panel groups and layouts.",
        href: "/docs/components/resizable",
        icon: <GripVertical className="w-5 h-5" />,
      },
      {
        title: "Scroll Area",
        description: "Custom styled cross-browser scrollbar.",
        href: "/docs/components/scroll-area",
        icon: <Scroll className="w-5 h-5" />,
      },
      {
        title: "Skeleton",
        description: "Loading placeholder states.",
        href: "/docs/components/skeleton",
        icon: <Ghost className="w-5 h-5" />,
      },
      {
        title: "Empty",
        description: "Placeholder for empty states.",
        href: "/docs/components/empty",
        icon: <FolderOpen className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Forms & Inputs",
    items: [
      {
        title: "Input",
        description: "Basic text field for user input.",
        href: "/docs/components/input",
        icon: <FormInput className="w-5 h-5" />,
      },
      {
        title: "Input Group",
        description: "Input with attached addons or buttons.",
        href: "/docs/components/input-group",
        icon: <Layers className="w-5 h-5" />,
      },
      {
        title: "Input OTP",
        description: "One-time password input fields.",
        href: "/docs/components/input-otp",
        icon: <MoreHorizontal className="w-5 h-5" />,
      },
      {
        title: "Textarea",
        description: "Multiline text input field.",
        href: "/docs/components/textarea",
        icon: <AlignJustify className="w-5 h-5" />,
      },
      {
        title: "Checkbox",
        description: "Multi-selection control.",
        href: "/docs/components/checkbox",
        icon: <CheckSquare className="w-5 h-5" />,
      },
      {
        title: "Radio Group",
        description: "Single selection from a list.",
        href: "/docs/components/radio-group",
        icon: <CircleDot className="w-5 h-5" />,
      },
      {
        title: "Switch",
        description: "Toggle control for boolean states.",
        href: "/docs/components/switch",
        icon: <ToggleLeft className="w-5 h-5" />,
      },
      {
        title: "Select",
        description: "Custom styled dropdown selection.",
        href: "/docs/components/select",
        icon: <ListFilter className="w-5 h-5" />,
      },
      {
        title: "Native Select",
        description: "Browser native dropdown selection.",
        href: "/docs/components/native-select",
        icon: <ArrowDownSquare className="w-5 h-5" />,
      },
      {
        title: "Combobox",
        description: "Autocomplete input and command palette.",
        href: "/docs/components/combobox",
        icon: <ChevronsUpDown className="w-5 h-5" />,
      },
      {
        title: "Date Picker",
        description: "Date selection with calendar.",
        href: "/docs/components/date-picker",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Form",
        description: "Building forms with validation (React Hook Form).",
        href: "/docs/components/form",
        icon: <Layout className="w-5 h-5" />,
      },
      {
        title: "Field",
        description: "Wrapper for form controls and labels.",
        href: "/docs/components/field",
        icon: <SquarePen className="w-5 h-5" />,
      },
      {
        title: "Slider",
        description: "Input control for selecting a value within a range.",
        href: "/docs/components/slider",
        icon: <SlidersHorizontal className="w-5 h-5" />,
      },
      {
        title: "Toggle",
        description: "Two-state button.",
        href: "/docs/components/toggle",
        icon: <ToggleLeft className="w-5 h-5" />,
      },
      {
        title: "Toggle Group",
        description: "Set of two-state buttons.",
        href: "/docs/components/toggle-group",
        icon: <List className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Navigation",
    items: [
      {
        title: "Menubar",
        description: "Desktop style menu bar.",
        href: "/docs/components/menubar",
        icon: <PanelTop className="w-5 h-5" />,
      },
      {
        title: "Navigation Menu",
        description: "Navigation header with mega-menu support.",
        href: "/docs/components/navigation-menu",
        icon: <Compass className="w-5 h-5" />,
      },
      {
        title: "Breadcrumb",
        description: "Indicates current page location.",
        href: "/docs/components/breadcrumb",
        icon: <ChevronRight className="w-5 h-5" />,
      },
      {
        title: "Pagination",
        description: "Navigation for paginated content.",
        href: "/docs/components/pagination",
        icon: <MoreHorizontal className="w-5 h-5" />,
      },
      {
        title: "Tabs",
        description: "Switch between different views.",
        href: "/docs/components/tabs",
        icon: <SplitSquareHorizontal className="w-5 h-5" />,
      },
      {
        title: "Sidebar",
        description: "Collapsible side navigation.",
        href: "/docs/components/sidebar",
        icon: <SidebarIcon className="w-5 h-5" />,
      },
      {
        title: "Button Group",
        description: "Group of buttons acting as a single unit.",
        href: "/docs/components/button-group",
        icon: <Layers className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Overlays & Feedback",
    items: [
      {
        title: "Dialog",
        description: "Modal window for critical information.",
        href: "/docs/components/dialog",
        icon: <AppWindow className="w-5 h-5" />,
      },
      {
        title: "Alert Dialog",
        description: "Modal that interrupts the user for confirmation.",
        href: "/docs/components/alert-dialog",
        icon: <AlertOctagon className="w-5 h-5" />,
      },
      {
        title: "Alert",
        description: "Callout for user attention.",
        href: "/docs/components/alert",
        icon: <AlertTriangle className="w-5 h-5" />,
      },
      {
        title: "Sheet",
        description: "Side-aligned modal drawer.",
        href: "/docs/components/sheet",
        icon: <PanelLeft className="w-5 h-5" />,
      },
      {
        title: "Drawer",
        description: "Bottom slide-over modal.",
        href: "/docs/components/drawer",
        icon: <PanelBottom className="w-5 h-5" />,
      },
      {
        title: "Toast",
        description: "Temporary notification message.",
        href: "/docs/components/toast",
        icon: <BellRing className="w-5 h-5" />,
      },
      {
        title: "Sonner",
        description: "An opinionated toast component.",
        href: "/docs/components/sonner",
        icon: <BellRing className="w-5 h-5" />,
        badge: "New",
      },
      {
        title: "Tooltip",
        description: "Hover text hint.",
        href: "/docs/components/tooltip",
        icon: <MessageSquare className="w-5 h-5" />,
      },
      {
        title: "Popover",
        description: "Rich content displayed on trigger click.",
        href: "/docs/components/popover",
        icon: <Sticker className="w-5 h-5" />,
      },
      {
        title: "Hover Card",
        description: "Preview content available behind a link.",
        href: "/docs/components/hover-card",
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: "Context Menu",
        description: "Right-click menu actions.",
        href: "/docs/components/context-menu",
        icon: <MousePointerClick className="w-5 h-5" />,
      },
      {
        title: "Dropdown Menu",
        description: "Menu actions triggered by a button.",
        href: "/docs/components/dropdown-menu",
        icon: <Menu className="w-5 h-5" />,
      },
      {
        title: "Progress",
        description: "Displays an indicator showing the completion progress.",
        href: "/docs/components/progress",
        icon: <Loader2 className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Data Display",
    items: [
      {
        title: "Avatar",
        description: "Image element for a user.",
        href: "/docs/components/avatar",
        icon: <User className="w-5 h-5" />,
      },
      {
        title: "Accordion",
        description: "Vertically stacked set of interactive headings.",
        href: "/docs/components/accordion",
        icon: <ChevronDown className="w-5 h-5" />,
      },
      {
        title: "Collapsible",
        description: "Interactive component to expand/collapse content.",
        href: "/docs/components/collapsible",
        icon: <ChevronsUpDown className="w-5 h-5" />,
      },
      {
        title: "Table",
        description: "Responsive HTML table.",
        href: "/docs/components/table",
        icon: <Table2 className="w-5 h-5" />,
      },
      {
        title: "Data Table",
        description: "Advanced table with sorting and filtering.",
        href: "/docs/components/data-table",
        icon: <FileSpreadsheet className="w-5 h-5" />,
      },
      {
        title: "Carousel",
        description: "A slideshow component for cycling through elements.",
        href: "/docs/components/carousel",
        icon: <GalleryHorizontal className="w-5 h-5" />,
      },
      {
        title: "Chart",
        description: "Beautiful charts built with Recharts.",
        href: "/docs/components/chart",
        icon: <BarChart3 className="w-5 h-5" />,
      },
      {
        title: "Calendar",
        description: "Date calendar component.",
        href: "/docs/components/calendar",
        icon: <Calendar className="w-5 h-5" />,
      },
      {
        title: "Command",
        description: "Fast, composable command menu.",
        href: "/docs/components/command",
        icon: <CommandIcon className="w-5 h-5" />,
      },
    ],
  },
];

function DotPattern() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="relative min-h-screen">
      <DotPattern />
      
      <div className="container mx-auto px-6 max-w-6xl py-20">
        
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Currently v1.0.0
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Components
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Beautifully designed components that you can copy and paste into your apps. 
            Accessible. Customizable. Open Source.
          </p>

          {/* Search Bar Visual */}
          <div className="relative w-full max-w-md mt-4 group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search components..." 
              className="w-full rounded-full border bg-background/50 py-3 pl-10 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:bg-background hover:border-primary/50"
              readOnly 
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <kbd className="hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-20">
          {componentsData.map((category, idx) => (
            <section key={idx} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {category.title}
                </h2>
                <div className="h-px flex-1 bg-border/60"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {category.items.map((item, itemIdx) => (
                  <Link 
                    key={itemIdx} 
                    href={item.href}
                    className="group relative flex flex-col rounded-xl border bg-background/40 p-6 transition-all hover:bg-secondary/40 hover:border-primary/20 hover:shadow-sm"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      {item.badge && (
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full 
                          ${item.badge === 'New' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : ''}
                          ${item.badge === 'Beta' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' : ''}
                        `}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="mb-2 font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                      {item.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </h3>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 border-t pt-16 pb-8 text-center">
          <h3 className="text-lg font-semibold mb-2">Want to contribute?</h3>
          <p className="text-muted-foreground mb-6">Help us improve the component library on GitHub.</p>
          <Link href="https://github.com" className="text-sm font-medium text-primary hover:underline underline-offset-4">
            View on GitHub &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
}