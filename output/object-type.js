"use strict";
// Inline Type Annotation: Directly specify the object's structure during declaration.
const student = {
    id: 10001,
    name: "Abu Nayem",
    address: {
        area: "Kawaltia",
        city: "Gazipur",
        country: "Bangladesh",
    },
};
console.log(student);
const car = {
    type: "private car",
    model: "BMW",
    year: 2020,
};
// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const person = {};
person.id = 101;
person.name = "Mofiz";
