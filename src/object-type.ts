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
