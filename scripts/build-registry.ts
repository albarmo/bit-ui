import fs from "fs-extra";
import path from "path";

// 1. Konfigurasi Lokasi
const SOURCE_DIR = path.join(process.cwd(), "components/ui");
const OUTPUT_DIR = path.join(process.cwd(), "registry");

// 2. Mapping Dependensi (Manual Config)
// Di sini Anda mendefinisikan library apa saja yang dibutuhkan tiap komponen
const COMPONENT_DEPENDENCIES: Record<string, string[]> = {
  "button": ["@radix-ui/react-slot", "class-variance-authority"],
  "accordion": ["@radix-ui/react-accordion"],
  "dialog": ["@radix-ui/react-dialog"],
  // Tambahkan komponen lain di sini...
};

async function buildRegistry() {
  console.log("🚀 Memulai build registry...");

  // Pastikan folder output bersih
  if (fs.existsSync(OUTPUT_DIR)) {
    fs.removeSync(OUTPUT_DIR);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // Baca semua file di components/ui
  const files = fs.readdirSync(SOURCE_DIR);
  const registryIndex: string[] = [];

  for (const file of files) {
    // Abaikan file non-tsx atau file index/utils jika tidak perlu
    if (!file.endsWith(".tsx")) continue;

    const componentName = file.replace(".tsx", "");
    const filePath = path.join(SOURCE_DIR, file);
    
    // Baca konten file asli
    const content = fs.readFileSync(filePath, "utf-8");

    // Ambil daftar dependency dari config map di atas
    const dependencies = COMPONENT_DEPENDENCIES[componentName] || [];

    // Struktur Data Registry
    const registryItem = {
      name: componentName,
      dependencies: dependencies,
      files: [
        {
          name: file,
          content: content, // Raw code disimpan di sini
        },
      ],
      type: "components:ui", // Metadata tambahan
    };

    // Tulis file JSON individu (misal: registry/button.json)
    const outputPath = path.join(OUTPUT_DIR, `${componentName}.json`);
    fs.writeJSONSync(outputPath, registryItem, { spaces: 2 });
    
    // Tambahkan ke index list
    registryIndex.push(componentName);

    console.log(`✅ Build: ${componentName}`);
  }

  // Buat file index.json (Daftar isi semua komponen)
  // Berguna jika nanti CLI Anda punya perintah "my-ui list"
  fs.writeJSONSync(path.join(OUTPUT_DIR, "index.json"), registryIndex, { spaces: 2 });

  console.log(`\n🎉 Selesai! Registry dibuat di: ${OUTPUT_DIR}`);
}

buildRegistry().catch((err) => {
  console.error(err);
});