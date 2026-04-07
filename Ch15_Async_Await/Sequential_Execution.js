// // When Step 2 depends on Step 1's result, you MUST run them sequentially.

// Ste1 - Step 2
 function apiCall(name){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(name, "200 ok!.");
        }, 1000);
    });
}

async function SequientialExe(){

    console.log("Starting of the test");
    let start = Date.now();

    let step1 = await apiCall("Login");
    console.log("Step1: ",step1);

    let step2 = await apiCall("Dashboard");
    console.log("Step2: ",step2);

    let step3 = await apiCall("Reports");
    console.log("Step3: ",step3);

    console.log("Time: ~" + (Date.now() - start) + "ms");
}

SequientialExe();
