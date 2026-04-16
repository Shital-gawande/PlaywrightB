interface Calculator {
    add(a: number, b:number): number,
    subtract(a: number, b: number):number
    mutiply(a:number, b: number): number
}

let calci: Calculator = {

    add:(a,b)=> a+b,
    subtract:(a,b) => a-b,
    mutiply: (a,b) => a * b
}

console.log(calci);

console.log(calci.add(5,6));
console.log(calci.subtract(10,4));
console.log(calci.mutiply(3,4));