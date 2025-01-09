// 1. Using as keyword (Preferred approach)
let c: unknown = "Hello";

console.log((c as string).toLowerCase());
console.log((<string>c).length);

let z: any = "10";
console.log((z as number) * (z as number));
