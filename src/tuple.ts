// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

let tupleArr: [string, number, boolean];
tupleArr = ["Sumon", 25, true];
console.log(tupleArr);

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

let values: readonly [number, number] = [12.23, 29.51];
// values.push(55.12); // 'push' does not exist on type of readonly
console.log(values);

// Destructuring Tuples
// Since tuples are arrays we can also destructure them.

let fullName: [string, string] = ["Mejor", "Dalim"];
const [real, hero] = fullName;
console.log(hero);
