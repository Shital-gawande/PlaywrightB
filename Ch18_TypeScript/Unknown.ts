let umjk: unknown = "Shital";

if(typeof umjk === "string"){
    console.log(umjk.toUpperCase());
}

//function annonation
function sayName(name: string): string{
    return `Hello, ${name}!`;
}

console.log(sayName("Shital"));

let result = (a: number, b: number): number =>{
    return a+ b;
}
console.log(result(5, 10));



let emp:{name: string, age: number} = {
    name:"Shital",
    age: 30
};
console.log(emp);

