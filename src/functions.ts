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
