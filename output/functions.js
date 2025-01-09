"use strict";
// Basic Function with Optional Paramters
function addition(a, b, c) {
    return a + b + (c || 0);
}
console.log(addition(10, 20));
// Default paramter
const point = (n) => {
    return n * n;
};
console.log(point(3));
