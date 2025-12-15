import { execSync } from "child_process";
import { registry } from "../registry";
import { getInstallCommand, getPackageManager } from "@/lib/package-manager";

// Contoh fungsi ketika user menjalankan "npx my-ui add [component]"
export async function add(componentName: string) {
  // 1. Cek apakah komponen ada di registry
  const componentConfig = registry[componentName];
  if (!componentConfig) {
    console.error(`Komponen ${componentName} tidak ditemukan.`);
    return;
  }

  console.log(`✨ Menambahkan komponen: ${componentName}...`);

  // 2. Install Dependencies (Bagian Penting)
  if (componentConfig.dependencies.length > 0) {
    const pm = getPackageManager();
    const depsToInstall = componentConfig.dependencies.join(" ");
    const installCmd = getInstallCommand(pm, depsToInstall, false);

    console.log(`📦 Menginstall dependencies: ${depsToInstall}...`);
    
    try {
      // Jalankan perintah install di terminal user
      execSync(installCmd, { stdio: "inherit" });
      console.log("✅ Dependencies berhasil diinstall.");
    } catch (error) {
      console.error("❌ Gagal menginstall dependencies.", error);
    }
  }

  // 3. Install Dev Dependencies (Jika ada)
  if (componentConfig.devDependencies && componentConfig.devDependencies.length > 0) {
    const pm = getPackageManager();
    const devDepsToInstall = componentConfig.devDependencies.join(" ");
    const installCmd = getInstallCommand(pm, devDepsToInstall, true);

    console.log(`🔧 Menginstall dev dependencies...`);
    execSync(installCmd, { stdio: "inherit" });
  }

  console.log(`🚀 Selesai! Komponen ${componentName} siap digunakan.`);
}