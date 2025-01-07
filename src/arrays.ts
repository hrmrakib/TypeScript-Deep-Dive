const people: string[] = ["Masum", "Rofiq", "Sohel", "Asif"];
// people.push(20); // 'number' is not assignable to 'string'
console.log(people);

// Readonly
// The readonly keyword can prevent arrays from being changed.
const fruits: readonly string[] = ["Apple"];
// fruits.push("Orange"); // 'push' does not exist on readonly
