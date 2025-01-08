"use strict";
// 1. Numeric Enums
// By default, enums are numeric, starting at 0 and incrementing by 1 for each member.
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 0] = "north";
    Direction[Direction["south"] = 1] = "south";
    Direction[Direction["east"] = 2] = "east";
    Direction[Direction["west"] = 3] = "west";
})(Direction || (Direction = {}));
console.log(Direction.north, Direction.south, Direction.east, Direction.west);
