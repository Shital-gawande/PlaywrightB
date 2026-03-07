//searching elements in array

let result = ["Pass","Fail","Pass","Fail","skip"];

console.log(result.indexOf("Pass")); // return index of provided ele only first 
console.log(result.indexOf("Fail")); 

console.log(result.indexOf("error")); // return -1 if not found

console.log(result.lastIndexOf("Pass")); // return last index of provided ele
console.log(result.lastIndexOf("Fail"));

console.log(result.includes("Fail")); // return true if ele is present in array
console.log(result.includes("error")); // false

//find - first matching element
let arr = [5,10,15,42,23];

console.log(arr.find(n => n>20)); // find search based on condition

//findIndex
console.log(arr.findIndex(n=>n>20));

console.log(arr.findLast(n=>n>20)); // find last element satisfy condition
console.log(arr.findLastIndex(n=>n>20)); // find last index of of element satisfy the condition

