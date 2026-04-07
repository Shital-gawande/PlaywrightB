// async await basic

async function getTestresults(){
    return "Pass";
}

//async always return a promise
getTestresults().then(function(result){
    console.log(result);
});

async function runTest(){
    let r1 = await Promise.resolve("Test1 Passed");
    console.log(r1);

    let r2 = await Promise.resolve("Test2 Passed");
    console.log(r2);
}

runTest();