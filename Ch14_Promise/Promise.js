let order = new Promise(function(resolve,reject){
    let foodready = true;
    if(foodready){
        resolve("Pizza is delivered");
    }
    else{
        reject("order cancelled");
    }
});

// A Promise is an OBJECT. It wraps a value that will be available later.
console.log(order);
// A Promise is in one of these states:
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.