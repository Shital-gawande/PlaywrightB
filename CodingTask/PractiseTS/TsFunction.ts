//function accepts value and return a string
function hello(name: string): string{
    return "hello " + name;
}
console.log(hello("Shital"));

// when we write arrow function , we don't give type to function variable
let value = (a: number,b: number): number => a*b;
console.log("Multiplication:",value(3,2));

//function expression

let square = function(a: number): number{
    return a*a;
}
console.log("Square:",square(5));