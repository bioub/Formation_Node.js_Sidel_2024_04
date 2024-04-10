import hello from './hello.js';
import { sum, sub } from './my-maths.js';
import chalk from 'chalk';


console.log('sum(1, 2)', sum(1, 2));
console.log('sub(1, 2)', sub(1, 2));
console.log('hello("Romain")', chalk.red(hello("Romain")));
