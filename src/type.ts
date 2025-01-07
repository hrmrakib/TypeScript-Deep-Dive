// Explicit - writing out the type:
const country: string = "Bangladesh";
console.log(country);

// Implicit - TypeScript will "guess" the type, based on the assigned value:
let age = 54;
// age = "55"; // Type 'string' is not assignable to type 'number'

console.log(age);
