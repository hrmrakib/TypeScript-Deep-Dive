const strArr1: string[] = ["React", "Next", "Node"];
const numArr1: number[] = [12, 34, 54, 66];
const isHappy1: boolean[] = [false, true, true];

// Another way
const strArr2: Array<string> = ["React", "Next", "Node"];
const numArr2: Array<number> = [12, 34, 54, 66];
const isHappy2: Array<boolean> = [false, true, true];

// more simplicity with generics
type TGenericsType<T> = Array<T>;

const strArr: TGenericsType<string> = ["React", "Next", "Node"];
const numArr: TGenericsType<number> = [12, 34, 54, 66];
const isHappy: TGenericsType<boolean> = [false, true, true];
// console.log(strArr, numArr, isHappy);

const users: TGenericsType<{ name: string; age: number }> = [
  {
    name: "Faysal",
    age: 24,
  },
  {
    name: "Tanvir",
    age: 27,
  },
];
