"use strict";
// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
let fruit = "Apple";
fruit = 101;
fruit = false;
console.log(fruit);
// Type: unknown
/* unknown is a similar, but safer alternative to any. */
let animal = "Cow";
animal = true;
animal = null;
console.log(animal);
// Type: never
/* never effectively throws an error whenever it is defined. */
let opps;
// console.log(opps);
// Type: undefined & null
/* undefined and null are types that refer to the JavaScript primitives undefined and null respectively. */
let what = undefined;
let why = null;
console.log(what, why);
