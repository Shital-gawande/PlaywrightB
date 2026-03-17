console.log(greet("Alice")); // this will print the Hello, Alice! as its hoisted

function greet(name) {
  return `Hello, ${name}!`;
}
//console.log(getStatus(200)); // ReferenceError as arrow functions not hoisted
const getStatus = (code) => code >= 200 ? "ok" : "error";
function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
console.log(analyze()); // this will print zero as array is blank

// closure
function makeCounter() {
  let count = 0;
  return () => ++count;
}
let counter = makeCounter();
counter();
counter();
console.log(counter());

//spread parameters
function test(...args) {
  return args.length;
}
let length =test("login", "pass", 200, true);
console.log(length);

const obj = {
  env: "staging",
  getEnv: () => {
    return this.env;
  }
};
console.log(obj.getEnv()); // this will print undefined


function double(n) { return n * 2; }
function addOne(n) { return n + 1; }
let result = [1, 2, 3].map(double).map(addOne);
console.log(result)

function run(fn) {
  return fn("Login");
}
console.log(run(name => `Running: ${name}`)); // running : login

function outer() {
  let x = 10;
  function inner() {
    let x = 20;
    return x;
  }
  return x + inner();
}
console.log(outer());
