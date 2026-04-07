function calculate(a,b,callback){
    return callback(a,b);
}

let sum = calculate(56,23,function(x,y){
    return x+y;
});
console.log("Sum is : "+sum);

//asynchronous callback
console.log("A: Test suite started");

setTimeout(function () {
    console.log("B: Slow API test finished");
}, 1000);

console.log("C: Fast unit test finished");