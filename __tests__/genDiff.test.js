import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

/* eslint-disable no-restricted-syntax */
const __filename = fileURLToPath(import.meta.url);
/* eslint-enable no-restricted-syntax */
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const fileData = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test.each([
	['json', 'stylish', fileData('expected_file_stylish.txt')],
	['yml', 'stylish', fileData('expected_file_stylish.txt')],
	['json', 'plain', fileData('expected_file_plain.txt')],
	['yml', 'plain', fileData('expected_file_plain.txt')],
	['json', 'json', fileData('expected_file_json.txt')],
	['yml', 'json', fileData('expected_file_json.txt')],
  ])('all test gendiff', (extension, format, expected) => {
	expect(genDiff(getFixturePath(`file1.${extension}`), getFixturePath(`file2.${extension}`), format)).toEqual(expected);
});

