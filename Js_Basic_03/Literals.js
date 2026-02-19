
// if we use single quote for string then single quote is not allowed in string
let name = 'john'; // string literal
let age = 30; // number literal
let isStudent = true;   // boolean literal
let address = null; // null literal
let person = { name: 'john', age: 30 }; // object literal
let numbers = [1, 2, 3, 4, 5]; // array literal     
let firstName = "Shital"; // string literal

//template literals
let greeting = `Hello, my name is ${firstName} and I am ${age} years old.`; // template literal
console.log(greeting); // Output: Hello, my name is Shital and I am 30 years old.

let add = `The sum of 5 and 10 is ${5 + 10}.`; // template literal with expression
console.log(add); // Output: The sum of 5 and 10 is 15.

// file path
let path = "c:\Users\Shital\file.txt"; // this will cause an error because of the backslashes are special characters
// to fix this we can use double backslashes
let pathFixed = "c:\\Users\\Shital\\file.txt";

// urls are used with reversed slashes

let address1 = "https://www.example.com"; //path with forward slashes and it is used in urls
//if we have single slash in url it will vanished off so, add extra slash to fix this
let address2 = "https://www.example.com//path";

console.log(path); // Output: c:\Users\Shital\file.txt (this will cause an error)
console.log(pathFixed); // Output: c:\Users\Shital\file.txt
console.log(address1);
console.log(address2); // Output: https://www.example.com//path
