
let str = "Hello World";

// In JavaScript, the following values are considered "falsy":
// false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN.
// All other values are considered "truthy". This includes non-empty strings, non-zero numbers, objects, arrays, and functions.
if (str) {
  console.log("The string is truthy.");
} 

let num = 0; // 0 is a falsy value
let emptyStr = ""; // An empty string is a falsy value
let undef; // undefined is a falsy value
let nul = null; // null is a falsy value    
let bool = false; // false is a falsy value
let arr = []; // An empty array is a truthy value

let obj = {}; // An empty object is a truthy value
let func = function() {}; // A function is a truthy value
let bigIntZero = 0n; // BigInt zero is a falsy value
let bigIntNonZero = 1n; // A non-zero BigInt is a truthy value  
let number = 42; // A non-zero number is a truthy value