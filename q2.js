"use strict";
// define interface for Student object
Object.defineProperty(exports, "__esModule", { value: true });
// assign interface/type to the function definition properly
function findTopNames(students) {
    /* Your code here */
    var Find = students.filter(function (std) { return std.score > 8; })
        .map(function (std) { return std.name; });
    return Find;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
