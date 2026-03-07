//Adding and removing elements from array
let arr = [1,2,3];
console.log(arr);
arr.push(4) //add the element at last
console.log(arr);
arr.pop(); // remove the element from last
console.log(arr);

arr.push(4,5); // add 2 elements at the end
console.log(arr);

//adding element at start of array
arr.unshift(0);
console.log(arr);
arr.shift(); // remove start element from array
console.log(arr);

// splice to delete, add, remove elements in array
//
let arr2 = [1,2,3,4,5,6,7,8];
arr2.splice(0,1); // remove only 1 element at index 0
console.log(arr2);
arr2.splice(2,3); // delete from 2 index and remove 3 elements
console.log(arr2);

//add without deleting
arr2.splice(1,0,6); // add element 6 at index 1 and remove 0
console.log(arr2);

// add by removing(replace)
arr2.splice(3,2,9,10); // start at index 3 and remove 2 elements and add 2 elements at same index
console.log(arr2);
