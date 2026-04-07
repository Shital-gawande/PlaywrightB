//callback function
function greet(name, callback){
    console.log("Welcome"+name);
    callback();
}

greet("shital", function(){
    console.log("This is callback function");
});

//callback with parameters
function TestResult(Testname, callback){
    let result = "pass";
    console.log("test name: "+Testname);
    callback(Testname, result);   
}

TestResult("Login test", function(name,res){
    console.log("test Name:"+name+" and result is "+res);
});

