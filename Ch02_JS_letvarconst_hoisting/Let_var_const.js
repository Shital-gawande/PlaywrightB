//var is used to declare variables in JavaScript. 
// It has function scope and is hoisted to the top of its scope.
//  However, it can lead to issues such as variable shadowing and unintended 
// consequences due to its function scope. 
var a =10;
console.log(a);

function test(){
    var a = 20;
    console.log(a);
    if(true){
        var a =30;
        console.log(a);
    }
    //var is  function scope and not block scope
    console.log("Var a=",a);
}

test();
console.log(a);

// let 
let b = 10;
console.log(b);

function testLet(){
    let b = 20;
    console.log(b);
    if(true){
        let b =30;
        console.log(b);
    }
    //let is block scope
    console.log("Let b=",b);
}

testLet();

//const
const c = 90;
console.log(c);
//const cannot be reassigned
//c =100;
