function addition(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}

console.log(addition(10, 20));
