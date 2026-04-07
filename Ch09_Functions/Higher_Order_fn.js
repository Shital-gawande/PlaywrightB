// A function that takes a function as argument or returns a function.

function runWithLogging(testFun,name){

    console.log(`test name is ${name}`);
    let result = testFun();
    console.log(`test function ${result} and name ${name}`);
    return result;
}

function loginTest(){
    return "Pass";
}

function dasboard(){
    return "Failed";
}

runWithLogging(loginTest,"Login");
runWithLogging(dasboard,"Dashboard test");