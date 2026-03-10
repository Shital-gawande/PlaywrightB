// sort array
let unsorted = ["Shital","Saket","Sugandha"];
let sorted = unsorted.sort();
console.log(sorted);

let nums = [10,2,56,50];
let numsSort = nums.sort();
console.log(numsSort); // this will sort by string first number will be checked so use below
let s1 = nums.sort((a,b)=>a-b); // ascending
console.log(s1);
let s2 = nums.sort((a,b)=>b-a); // descending
console.log(s2);
