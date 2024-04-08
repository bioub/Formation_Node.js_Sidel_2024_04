// Default param ES2015
function sum(a, b, c = 0) {
  return a + b + c;
}

console.log(sum(1, 2));


const obj = { a: 1, b: 2};
const numbers = [1, 2];

// Nullish Coalescing Operator ES2020
console.log(numbers[3] ?? 0);
console.log(obj.c ?? 0);
