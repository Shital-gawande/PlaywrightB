let mylet =10;
console.log(mylet);
//short cut for commenting code is ctrl + /

// hoisting
console.log(myvar); //undefined
var myvar = 20;
console.log(myvar); //20

// if you direclty access a variable that is not declared, it will throw a ReferenceError
//console.log(myvar2); //ReferenceError: myvar2 is not defined

// let hoisted but not initialized
//console.log(mylet1); //ReferenceError: Cannot access 'mylet1' before initialization
let mylet1 = 10;
console.log(mylet1); //10

// const hoisted but not initialized
console.log(myconst); //ReferenceError: Cannot access 'myconst' before initialization
const myconst = 90;
console.log(myconst); //90
