// Basic Function with Optional Paramters
function addition(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

console.log(addition(10, 20));

// Default paramter
const point = (n: number): number => {
  return n * n;
};

console.log(point(3));

// Rest Parameter
function sum(...numbers: number[]): number {
  return numbers.reduce((prev, cur) => prev + cur);
}
console.log(sum(1, 2, 3, 4, 5));
