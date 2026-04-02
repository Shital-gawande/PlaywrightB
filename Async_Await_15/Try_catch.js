// error handling with try catch

// With Promises you use .catch().
//  With async/await you use try/catch — exactly like regular JavaScript error handling.

async function testAPI(){
    try{
    let result = await Promise.reject("API failed");
    console.log(result);
    } catch (error) {
    console.log("Error: ",error);
    }
    finally{
        console.log("API call completed");
    }
}

testAPI();

// try/catch/finally maps directly to .then()/.catch()/.finally() — same logic, cleaner syntax.