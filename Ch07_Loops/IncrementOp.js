// help to repeat the code 

// pre increment and post increment

let a = 10;
let b = a++; // post increment it will print 10 only

console.log(a);
console.log(b);

let a1 = 10;
let b1 = ++a1; // pre increment it will print 11 

console.log(a1);
console.log(b1);

//Exp and result table ERT
// line no | a1 | b1
// 1       | 10 | NA
//2        | 11 | 11

let a2 = 10;
console.log(a2++ + a); // 21 10+ (incremented a to 11)

let a3 = 10;
console.log(a3++ + ++a3); // 22 (a3 is 10 , incremented to 11 and pre increment to 12 -> 10_12)

let a4 = 10;
console.log(++a + ++a); // pre increment a=11, again pre increment a=12 11 + 12 = 23
