//closure

function outer(){
    let message ="Hello";
    console.log("Outer function");
    function inner()
    {
        console.log(message);
    }
    return inner;

}

let infn = outer(); // it will print then return the function inner
infn(); // this is inner calling() // this will remember value of msg even after the execution of outer fn


// inner() not allowed

function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());