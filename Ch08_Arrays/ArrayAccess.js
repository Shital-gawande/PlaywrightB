//Accessing array elements
let a = [1,2,3,4,5,6];

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

//accessing from back, index starts from -1
console.log(a.at(-1));
console.log(a.at(-3));
console.log(a.at(-7)); // if ele is not present undefined is returned

//modify 
a[3] = 5;
console.log(a);

//length
console.log(a.length);