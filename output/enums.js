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
// You can specify the starting value explicitly:
var ststusCode;
(function (ststusCode) {
    ststusCode[ststusCode["success"] = 200] = "success";
    ststusCode[ststusCode["created"] = 201] = "created";
    ststusCode[ststusCode["badRequest"] = 400] = "badRequest";
    ststusCode[ststusCode["notFound"] = 404] = "notFound";
    ststusCode[ststusCode["serverError"] = 500] = "serverError";
})(ststusCode || (ststusCode = {}));
console.log(Direction.north, Direction.south, Direction.east, Direction.west);
console.log(ststusCode.notFound);
// 2. String Enums
var userRoles;
(function (userRoles) {
    userRoles["user"] = "USER";
    userRoles["admin"] = "ADMIN";
    userRoles["moderator"] = "MODERATOR";
})(userRoles || (userRoles = {}));
console.log(userRoles.admin);
// 3. Heterogeneous Enums
var contactInfo;
(function (contactInfo) {
    contactInfo[contactInfo["phone"] = 1792063488] = "phone";
    contactInfo["email"] = "hrmrakibs@gmail.com";
})(contactInfo || (contactInfo = {}));
console.log(contactInfo.email);
