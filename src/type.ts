// Explicit - writing out the type:
const country: string = "Bangladesh";
console.log(country);

const isMarried: boolean = false;

console.log(isMarried);

// Implicit - TypeScript will "guess" the type, based on the assigned value:
let age = 23;
// age = "33"; // Type 'string' is not assignable to type 'number'

console.log(age);
