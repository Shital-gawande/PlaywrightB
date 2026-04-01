let checkAuth = Promise.resolve("Auth is ok");
let checkDb = Promise.resolve("DB connected");
let checkCache= Promise.resolve("cache working");

Promise.all([checkAuth, checkDb, checkCache]).then((response)=>{
    console.log("Check All: ", response);
});

// this will only execute the .catch() block as one of the promises is rejected. 
// Promise.all() will reject if any of the promises in the array reject.  
Promise.all([
    Promise.resolve("Auth is ok"),
    Promise.reject("DB Down"),
    Promise.resolve("Cache is working")   
]).then((res)=>{
    console.log("Check All: ", res);
}).catch((err)=>{
    console.log("Error: ", err);
});