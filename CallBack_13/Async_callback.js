console.log("This is an asynchronous callback example");

setTimeout(function() {
    console.log("API response received");
},2000);

console.log("test3: moving on");