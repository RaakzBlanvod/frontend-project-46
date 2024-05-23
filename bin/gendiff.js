#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path'
const program = new Command();

program
.version('0.0.1', '-V, --version', 'output the version number')
.description('Compares two configuration files and shows a difference.')
// .option('-h, --help', 'output usage information')
.option('-f, --format [type]', 'output format')
.argument('filepath1')
.argument('filepath2')
.action((filepath1, filepath2) => {
  const resolvedFilepath1 = path.resolve(process.cwd(), filepath1);
  const resolvedFilepath2 = path.resolve(process.cwd(), filepath2);
  console.log(resolvedFilepath1, resolvedFilepath2);
})

program.parse();