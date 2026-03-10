let arr = [1,2,3,4,5,6];

let arr1 = arr.slice(-2);
console.log(arr1); // slice from end [5,6]

let arr2 = arr.slice(1,4); //slice from start index to end-1
console.log(arr2);

let arr3 = arr.slice(1); // if we provide only start index, then it will take until end 
console.log(arr3);

let arr4 = arr.slice(); // if index is not provided it will take full array
console.log(arr4);