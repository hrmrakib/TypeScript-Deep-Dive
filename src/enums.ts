// 1. Numeric Enums
// By default, enums are numeric, starting at 0 and incrementing by 1 for each member.

enum Direction {
  north,
  south,
  east,
  west,
}

console.log(Direction.north, Direction.south, Direction.east, Direction.west);
