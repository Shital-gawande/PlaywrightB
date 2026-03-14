//ways to create the shallow copy of array
let original = [1,2,3,4];
let copy1 = [...original];
let copy2 = Array.from(original);
let copy3 = original.slice();
let copy4 = original.concat();

copy1.push(5);
console.log(copy1);// 5 will be added at end
console.log(original); // this will not change

//deep copy

let deep = original;
deep.push(99);
console.log(original);
console.log(deep);