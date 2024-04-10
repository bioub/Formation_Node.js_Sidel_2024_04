// function(exports, require, module, __filename, __dirname) {
import hello from './hello.js';
import { sum, sub } from './my-maths.js';
import chalk from 'chalk';
import fs from 'node:fs';
import path from 'node:path';
console.log('sum(1, 2)', sum(1, 2));
console.log('sub(1, 2)', sub(1, 2));
console.log('hello("Romain")', chalk.red(hello("Romain")));
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), { encoding: 'utf-8' }));
console.log('dependencies', Object.keys(packageJson.dependencies));
// }
