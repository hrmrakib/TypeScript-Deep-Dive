// Union Types: You can combine multiple types using union (|).
type ID = string | number;
let userID: ID = "100103";

type TPerson = { name: string; age: number };

const person1: TPerson = {
  name: "Rakibul",
  age: 23,
};

console.log(person1);

// Functions:
type TFunc = (a: number, b: number) => void;
const add: TFunc = (a, b) => {
  console.log(a + b);
};
add(10, 15);

type TOps = {
  name?: string;
  define: (x: number, y: number) => number;
};

const move: TOps = {
  //   name: "JavaScript",
  define: (x, y) => {
    return x * y;
  },
};

let x = move.define(3, 5);
console.log(x);

// Interfaces
interface ICar {
  type: string;
  model: string;
  move(): void;
}

const car1: ICar = {
  type: "Private",
  model: "Tesla",
  move: () => {
    console.log(`Car is moving ....`);
  },
};

car1.move();
