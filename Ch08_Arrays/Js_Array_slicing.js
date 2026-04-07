let arr = [1,2,3,4,5,6];

let arr1 = arr.slice(-2);
console.log(arr1); // slice from end [5,6]

let arr2 = arr.slice(1,4); //slice from start index to end-1
console.log(arr2);

let arr3 = arr.slice(1); // if we provide only start index, then it will take until end 
console.log(arr3);

let arr4 = arr.slice(); // if index is not provided it will take full array
console.log(arr4);

let arr5 = arr.slice(0); // full array
console.log(arr5);

let arr6 = arr.slice(-6); // full array from ending
console.log(arr6);

// concatination
let a = [1,2];
let b = [3,4];

let c = a.concat(b);
console.log(c);

let c1 = a.concat(b,[5,6]);
console.log(c1);

// modern way of concsatination spread operator (...)

let c2 = [...a,...b];
console.log(c2);

//join 
let str = ["Shital","Saket"].join('|');
console.log(str);