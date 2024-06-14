import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import genDiff from "../src/index.js";
import {expect, test} from '@jest/globals';
import makeFormat from '../src/formatters/index.js';

/* eslint-disable */
const __filename = fileURLToPath(import.meta.url);
/* eslint-enable */
const __dirname = path.dirname(__filename);

const getFixturePath = (filePath) => path.join(__dirname, '..', 
'__fixtures__', filePath);

const fileData = (filePath) => 
fs.readFileSync(getFixturePath(filePath), 'utf-8');

test('gendiff test', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'));
	const expectedFile = fileData('expected_file_json.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format json', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish');
	const expectedFile = fileData('expected_file_json.stylish');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format yml', () => {
	const result = genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'));
	const expectedFile = fileData('expected_file_stylish.txt');
	expect(result).toEqual(expectedFile);
});

test('gendiff test format plain', () => {
	const result = genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain');
	const expectedFile = fileData('expected_file_plain.txt');
	expect(result).toEqual(expectedFile);
});

