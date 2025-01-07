"use strict";
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
let troupleArr;
troupleArr = ["Sumon", 25, true];
console.log(troupleArr);
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
let values = [12.23, 29.51];
console.log(values);
// Destructuring Tuples
// Since tuples are arrays we can also destructure them.
let fullName = ["Mejor", "Dalim"];
const [real, hero] = fullName;
console.log(hero);
