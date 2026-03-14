// function Expression assigning to variable

const greet = function(){
    console.log("Good Morning");
}
greet();

const multiply = function(a,b){
    return a*b;
}
console.log(multiply(5,2));

// assigning arrow function to variable
const greetName = (name1)=> console.log(name1)
greetName("Shital");

let add = (a,b) => {
    let sum = a + b;
    return sum;
}
let r = add(1,2);
console.log(r);
