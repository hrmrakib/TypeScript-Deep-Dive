"use strict";
// 1. Basic Syntax of Union Types
let a;
a = "hello";
a = 100;
// 2. Using Union Types in Functions
function printLength(value) {
    if (typeof value === "string") {
        console.log(value.length);
    }
    else {
        console.log(value.toString().length);
    }
}
printLength("hello");
printLength(938052432);
// 3. Union Types with Arrays
const arr = [23, "Frog"];
arr.push(100, "hello");
// arr.push(null); // 'null' is not assignable to paramter of type (string | number)
console.log(arr);
const baby = {
    name: "Oysaim",
    age: "1.5",
};
