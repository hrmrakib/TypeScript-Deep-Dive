"use strict";
const people = ["Masum", "Rofiq", "Sohel", "Asif"];
// people.push(20); // 'number' is not assignable to 'string'
console.log(people);
// Readonly
// The readonly keyword can prevent arrays from being changed.
const fruits = ["Apple"];
// fruits.push("Orange"); // 'push' does not exist on readonly
// Type Inference
// TypeScript can infer the type of an array if it has values.
const numbers = [1, 2, 3];
numbers.push(4);
numbers.push("5");
console.log(numbers);
