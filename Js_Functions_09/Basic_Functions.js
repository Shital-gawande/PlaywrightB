// basic function without return type & paramters
function greet(){
    console.log("Welcome js");
}
greet();

// function with parameter and without return type
function greetName(name1){
    console.log(`Welcome ${name1}`);
}
greetName("Shital");

// function without parameter and with return type
function greetR(){
    return "Welcome Guest";
}
let u = greetR();
console.log(u);

// function with parameter and with return type

function rtp(a,b){
    return a+b;
}
console.log(rtp(12,23));