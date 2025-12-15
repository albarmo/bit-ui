#!/usr/bin/env node
import { Command } from "commander";
import { add } from "./commands/add";

const program = new Command();

program
  .name("my-ui")
  .description("CLI untuk menambahkan komponen UI")
  .version("1.0.0");

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component>", "the component to add")
  .action(add);

program.parse();