// function(exports, require, module, __filename, __dirname) {

const hello = require('./hello');
const { sum, sub } = require('./my-maths')


console.log('sum(1, 2)', sum(1, 2));
console.log('sub(1, 2)', sub(1, 2));
console.log('hello("Romain")', hello("Romain"));

// }