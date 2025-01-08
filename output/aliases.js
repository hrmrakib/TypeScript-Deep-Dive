"use strict";
let userID = "100103";
const person1 = {
    name: "Rakibul",
    age: 23,
};
console.log(person1);
const add = (a, b) => {
    console.log(a + b);
};
add(10, 15);
const move = {
    //   name: "JavaScript",
    define: (x, y) => {
        return x * y;
    },
};
let x = move.define(3, 5);
console.log(x);
const car1 = {
    type: "Private",
    model: "Tesla",
    move: () => {
        console.log(`Car is moving ....`);
    },
};
car1.move();
