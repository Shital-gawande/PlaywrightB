// array transform 

let dist = [1,2,3,4,5,6,8,10];

//map transform each element and retrn same size array
let  dist1 =  dist.map(n=>n*n);
console.log(dist1);

//filter check condition and transform array with element that passed condition

let dist2 = dist1.filter(n=> n>20);
console.log(dist2);

// reduce() - method convert the aray to single ele like sum
let distSum = dist1.reduce((sum,a)=> sum +a, 0);
console.log(distSum);

// flat() -> convert array of array to single line array
let arra = [[1,2],[2,3],[4,5]];
console.log(arra.flat());

