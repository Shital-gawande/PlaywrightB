let call = new Promise((reolsve, reject)=>{
    reject("Network Error");
});

call.then((response)=>{ // Resolve
    console.log(response);
}).catch((error)=>{      // Reject
    console.log(error);
}).finally(()=>{ //// Always Executed!
    console.log("API call completed");
});

// .finally() ALWAYS runs — whether the test passed or failed. Just like afterEach() in Cypress or Playwright.

