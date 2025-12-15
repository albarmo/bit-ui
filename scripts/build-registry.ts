import fs from "fs-extra";
import path from "path";

const SOURCE_DIR = path.join(process.cwd(), "components/ui");
const OUTPUT_DIR = path.join(process.cwd(), "registry");

const COMPONENT_DEPENDENCIES: Record<string, string[]> = {
  "button": ["@radix-ui/react-slot", "class-variance-authority"],
  "alert-dialog": ["@radix-ui/react-alert-dialog"],
  "aspect-ratio": ["@radix-ui/react-aspect-ratio"],
  "avatar": ["@radix-ui/react-avatar"],
  "calendar": ["react-day-picker", "date-fns"],
  "checkbox": ["@radix-ui/react-checkbox"],
  "collapsible": ["@radix-ui/react-collapsible"],
  "context-menu": ["@radix-ui/react-context-menu"],
  "command": ["cmdk"],
  "dialog": ["@radix-ui/react-dialog"],
  "dropdown-menu": ["@radix-ui/react-dropdown-menu"],
  "hover-card": ["@radix-ui/react-hover-card"],
  "popover": ["@radix-ui/react-popover"],
  "progress": ["@radix-ui/react-progress"],
  "radio-group": ["@radix-ui/react-radio-group"],
  "scroll-area": ["@radix-ui/react-scroll-area"],
  "select": ["@radix-ui/react-select"],
  "separator": ["@radix-ui/react-separator"],
  "slider": ["@radix-ui/react-slider"],
  "switch": ["@radix-ui/react-switch"],
  "tabs": ["@radix-ui/react-tabs"],
  "toast": ["sonner"],
  "toggle": ["@radix-ui/react-toggle"],
  "toggle-group": ["@radix-ui/react-toggle-group"],
  "tooltip": ["@radix-ui/react-tooltip"],
  "data-table": ["@tanstack/react-table"],
  "carousel": ["embla-carousel-react"],
  "chart": ["recharts"],
};

async function buildRegistry() {
  console.log("🚀 Memulai build registry...");

  if (fs.existsSync(OUTPUT_DIR)) {
    fs.removeSync(OUTPUT_DIR);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const files = fs.readdirSync(SOURCE_DIR);
  const registryIndex: string[] = [];

  for (const file of files) {
    if (!file.endsWith(".tsx")) continue;

    const componentName = file.replace(".tsx", "");
    const filePath = path.join(SOURCE_DIR, file);
    
    const content = fs.readFileSync(filePath, "utf-8");

    const dependencies = COMPONENT_DEPENDENCIES[componentName] || [];

    const registryItem = {
      name: componentName,
      dependencies: dependencies,
      files: [
        {
          name: file,
          content: content,
        },
      ],
      type: "components:ui",
    };

    const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
    fs.writeJSONSync(outputPath, registryItem, { spaces: 2 });
    
    registryIndex.push(componentName);

    console.log(`✅ Build: ${componentName}`);
  }

  fs.writeJSONSync(path.join(OUTPUT_DIR, "index.json"), registryIndex, { spaces: 2 });

  console.log(`\n🎉 Selesai! Registry dibuat di: ${OUTPUT_DIR}`);
}

buildRegistry().catch((err) => {
  console.error(err);
});