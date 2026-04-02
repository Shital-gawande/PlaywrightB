 let r = new Promise(function(resolve,reject){
    resolve(42);
 });

 r.then(function(val){
    console.log("Value", val);
 });

 let z = new Promise(function(resolve,reject){
    reject("503 internal server error");
 });

 z.catch(function(err){
    console.log("Error", err);
 });

 let s = Promise.resolve(10);

 s.then(function(z){
    return z * 5;
 }).then(function(re){
    console.log("Result", re);
 });

 Promise.resolve(1).then((k)=>{
    console.log("Value 1",k);
    return k + 1;
 }).then((k)=>{
    console.log("Value 2",k);
    return k + 1;
 }).then((k)=>{
    console.log("Value 3",k);
    return k + 1;
 }).then((k)=>{
    console.log("Final value is ",k)
 });

 Promise.resolve("Start").then((value)=>{
    console.log(value);
    throw new Error("Broke at step 2");
 }).then((val)=>{
    console.log("This will not run");
 }).catch(function(err){
    console.log("Error",err.message);
 });

 Promise.reject("Test Failed").then(function(val){
    console.log("Data",val);
 }).catch(function(err){
    console.log("Catch block",err);
 }).finally(function(){
    console.log("This will always run");
 });

 Promise.resolve("Quick win").then((val)=>{
    console.log(val);   
 });

 Promise.reject("Quick fail").catch((err)=>{
    console.log(err);
 });

 let p1 = Promise.resolve("Login:Passed");
 let p2 = Promise.resolve("Search:Passed");
 let p3 = Promise.resolve("Logout:Passed");

 Promise.all([p1,p2,p3]).then(function(results){
    console.log("All results: ", results);
 }).catch(function(err){
    console.log("Error: ", err);
 });

 let k1 = Promise.resolve("Login:Passed");
 let k2 = Promise.reject("Search:failed");
 let k3 = Promise.resolve("Logout:Passed");

Promise.all([k1,k2,k3]).then(function(r){
    console.log("All Result: ",r);
}).catch((err)=>{
    console.log("Error: ",err);
});

Promise.allSettled([k1,k2,k3]).then((res)=>{
    console.log("All Settled: ",res);
});

Promise.allSettled([
    Promise.resolve("Test1 passed"),
    Promise.reject("Test2 failed"),
    Promise.resolve("Test3 passed")
]).then((res)=>{
    console.log("All Setted 1 : ", res);
}).catch((err)=>{
    console.log("Error: ", err);
});

Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + " → " + val);
    });
});