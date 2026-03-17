// return in function

function validateAge(age){
    if(age>=18) return "Eligibale for vote";
    else  return "not eligible for vote";
}

validateAge(30);

//return nothing 
function display(name1){
    console.log(`Name is ${name1}`);
}
display("Shital");

// function can return array or function or object

function numbers(){
    return [1,2,3,4,5];
}

// Return Values
function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "client error";
    if (code >= 500) return "server error";
}

getStatus(200);  // "success"
getStatus(404);  // "client error"
getStatus(500);  // "server error"

// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

logTest("Hi this is a a log");

// Return multiple values via array or object

function aaa() {
    return [2, 2, 3, 5, 4];
    // return {"name : Shital"}; - object
}