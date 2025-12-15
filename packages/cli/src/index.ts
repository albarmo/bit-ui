#!/usr/bin/env node

import { exec } from "child_process";
import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import fetch from "node-fetch";
import chalk from "chalk";

const program = new Command();
const REGISTRY_URL = "https://bit-ui.vercel.app";

program
  .name("my-ui")
  .description("CLI untuk menambahkan komponen ke project Anda")
  .version("1.0.0");

program
  .command("add")
  .argument("<component>", "Nama komponen yang ingin diinstall")
  .description("Tambah komponen ke project")
  .action(async (componentName) => {
    try {
      console.log(chalk.blue(`📦 Sedang mencari komponen: ${componentName}...`));

      // 1. Fetch data dari Registry
      const response = await fetch(`${REGISTRY_URL}/${componentName}.json`);
      
      if (!response.ok) {
        console.error(chalk.red("❌ Komponen tidak ditemukan di registry."));
        return;
      }

      const data: any = await response.json();

      // 2. Tentukan lokasi tujuan (default ke components/ui)
      const targetDir = path.resolve(process.cwd(), "components/ui");
      
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      // 3. Tulis file komponen
      for (const file of data.files) {
        const filePath = path.join(targetDir, file.name);
        await fs.writeFile(filePath, file.content);
        console.log(chalk.green(`✅ Berhasil membuat file: ${filePath}`));
      }

      // 4. Install dependencies
      if (data.dependencies && data.dependencies.length > 0) {
        console.log(chalk.yellow("\n🚀 Menginstall dependencies..."));
        const installCommand = `npm install ${data.dependencies.join(" ")}`;
        exec(installCommand, (error, stdout, stderr) => {
          if (error) {
            console.error(chalk.red(`❌ Gagal menginstall dependencies: ${error.message}`));
            return;
          }
          if (stderr) {
            console.error(chalk.red(`Stderr: ${stderr}`));
          }
          console.log(chalk.green(`Stdout: ${stdout}`));
          console.log(chalk.green("✅ Dependencies berhasil diinstall."));
        });
      }

    } catch (error) {
      console.error(chalk.red("Terjadi kesalahan:"), error);
    }
  });

program.parse(process.argv);