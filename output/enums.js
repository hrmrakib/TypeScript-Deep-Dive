"use strict";
// 1. Numeric Enums
// By default, enums are numeric, starting at 0 and incrementing by 1 for each member.
var Direction;
(function (Direction) {
    Direction[Direction["north"] = 101] = "north";
    Direction[Direction["south"] = 102] = "south";
    Direction[Direction["east"] = 103] = "east";
    Direction[Direction["west"] = 104] = "west";
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
// Computed and Constant Members
var product;
(function (product) {
    product[product["phonePrice"] = 1200] = "phonePrice";
    product[product["chargerPrice"] = 150] = "chargerPrice";
    product[product["totalPrice"] = 1350] = "totalPrice";
    product[product["phoneName"] = "iPhone 15".length] = "phoneName";
})(product || (product = {}));
console.log(product.phoneName);
