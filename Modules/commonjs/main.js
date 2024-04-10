// function(exports, require, module, __filename, __dirname) {

const hello = require('./hello');
const { sum, sub } = require('./my-maths')
const chalk = require('chalk');
const fs = require('node:fs');
const path = require('node:path');

console.log('sum(1, 2)', sum(1, 2));
console.log('sub(1, 2)', sub(1, 2));
console.log('hello("Romain")', chalk.red(hello("Romain")));

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), { encoding: 'utf-8' }));
console.log('dependencies', Object.keys(packageJson.dependencies));

// }
