// check if array is array
let a = [1,2];
let res = Array.isArray(a);
let res1 = Array.isArray([]);
let res2 = Array.isArray("shital");
console.log(res);
console.log(res1);
console.log(res2);

//every method and some 

let v = [4,5,6,8,9,1];
let even = v.every(s => s%2 ===0);
console.log(even);

let rsl = v.some(a => a%2 === 0);
console.log(rsl);

[80, 90, 85].every(s => s >= 70);   // true
[80, 60, 85].every(s => s >= 70);