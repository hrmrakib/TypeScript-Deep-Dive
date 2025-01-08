// Inline Type Annotation: Directly specify the object's structure during declaration.
const student: {
  id: number;
  name: string;
  email?: string;
  address: { area: string; city: string; country: string };
} = {
  id: 10001,
  name: "Abu Nayem",
  address: {
    area: "Kawaltia",
    city: "Gazipur",
    country: "Bangladesh",
  },
};

console.log(student);

// Type Aliases: Create a reusable type definition.
type TCar = {
  type: string;
  model: string;
  year: number;
};

const car: TCar = {
  type: "private car",
  model: "BMW",
  year: 2020,
};

// Interfaces: Define a contract for object shapes, which can be implemented or extended.
interface ICar {
  type: string;
  model: string;
  year: number;
}

const car2: ICar = {
  type: "Honda",
  model: "R15",
  year: 2018,
};

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.
const person: { [index: string]: number | string } = {};
person.id = 101;
person.name = "Mofiz";
