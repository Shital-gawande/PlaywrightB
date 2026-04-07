//let with block scope hoisting and Temporal Dead Zone (TDZ)

let x =10; // global scope
console.log(x); //10

if(true){
    console.log(x); // this is Temporal Dead Zone (TDZ) for x, as x is not yet declared in this block scope

    let x =20;
    console.log(x); //20
}