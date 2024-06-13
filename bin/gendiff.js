#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import genDiff from '../src/index.js';
import makeFormat from '../src/formatters/index.js';

const program = new Command();

program
  .version('0.0.1', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
// .option('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format (default: "stylish")')
  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2, option) => {
    // console.log(gendiff(filepath1, filepath2));
    const result = genDiff(filepath1, filepath2, option.format);
    console.log(result);
  });

program.parse();
