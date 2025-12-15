import Link from "next/link";

// Konfigurasi Menu Sidebar
const docsConfig = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
      { title: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Card", href: "/docs/components/card" },
      { title: "Input", href: "/docs/components/input" },
      { title: "Dialog", href: "/docs/components/dialog" },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-6 max-w-6xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      
      {/* Sidebar - Hidden di Mobile, Muncul di Desktop */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block overflow-y-auto border-r pr-4 py-6">
        <div className="w-full">
          {docsConfig.map((group, index) => (
            <div key={index} className="pb-4">
              <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {group.title}
              </h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                {group.items.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline text-muted-foreground hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="relative py-6 lg:gap-10 lg:py-8 min-h-screen">
        {children}
      </main>
    </div>
  );
}