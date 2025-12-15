import fs from "fs";
import path from "path";

export type PackageManager = "npm" | "pnpm" | "yarn" | "bun";

export function getPackageManager(targetDir: string = process.cwd()): PackageManager {
  if (fs.existsSync(path.join(targetDir, "pnpm-lock.yaml"))) return "pnpm";
  if (fs.existsSync(path.join(targetDir, "yarn.lock"))) return "yarn";
  if (fs.existsSync(path.join(targetDir, "bun.lockb"))) return "bun";
  return "npm";
}

export function getInstallCommand(pm: PackageManager, packageName: string, isDev: boolean = false): string {
  const devFlag = isDev ? "-D" : "";
  
  switch (pm) {
    case "npm":
      return `npm install ${packageName} ${devFlag}`;
    case "pnpm":
      return `pnpm add ${packageName} ${devFlag}`;
    case "yarn":
      return `yarn add ${packageName} ${devFlag}`;
    case "bun":
      return `bun add ${packageName} ${devFlag}`;
  }
}