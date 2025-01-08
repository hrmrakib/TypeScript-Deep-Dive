// 1. Numeric Enums
// By default, enums are numeric, starting at 0 and incrementing by 1 for each member.

enum Direction {
  north,
  south,
  east,
  west,
}

// You can specify the starting value explicitly:
enum ststusCode {
  success = 200,
  created = 201,
  badRequest = 400,
  notFound = 404,
  serverError = 500,
}

console.log(Direction.north, Direction.south, Direction.east, Direction.west);
console.log(ststusCode.notFound);

// 2. String Enums

enum userRoles {
  user = "USER",
  admin = "ADMIN",
  moderator = "MODERATOR",
}
console.log(userRoles.admin);

// 3. Heterogeneous Enums
enum contactInfo {
  phone = 1792063488,
  email = "hrmrakibs@gmail.com",
}
console.log(contactInfo.email);
