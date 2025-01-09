// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
let fruit: any = "Apple";
fruit = 101;
fruit = false;
console.log(fruit);

// Type: unknown
/* unknown is a similar, but safer alternative to any. */
let animal: unknown = "Cow";
animal = true;
animal = null;
console.log(animal);

// Type: never
/* never effectively throws an error whenever it is defined. */
let opps: never;
// console.log(opps);

// Type: undefined & null
/* undefined and null are types that refer to the JavaScript primitives undefined and null respectively. */
let what: undefined = undefined;
let why: null = null;
console.log(what, why);
