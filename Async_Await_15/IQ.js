async function greet(){
    return "Hello QA!";
}

greet().then((res)=>{
    console.log(res);
});

async function getStatus() {
    let status = await Promise.resolve("200");
    console.log("Status code: ", status);
}
getStatus();

async function testflow(){

    let r1 = await Promise.resolve("Opened browser");
    console.log("Step1: ",r1);

    let r2 = await Promise.resolve("clicked login");
    console.log("Step2: ",r2);

    let r3 = await Promise.resolve("Verified dashboard");
    console.log("Step3: ",r3);
}

testflow();

// try catch 
async function falkyTest(){
    try{
        let r1 = await Promise.reject("Test Failed");
        console.log("result:", r1);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}

falkyTest();

async function apicall1(){
    try{
        let respone = await Promise.resolve({status:200, body: "Careted"});
        console.log("Status Code:", respone.status);
        console.log("Response Body: ", respone.body);
    } catch (err){
        console.log("Error: ", err);
    }finally{
        console.log("API call completed");
    }
}

apicall1();

console.log("A");

async function test(){
    console.log("B");
    await Promise.resolve();
    console.log("C");
}
test();
console.log("D");

async function runAll() {
    let [r1,r2,r3] = await Promise.all([
        Promise.resolve("Login: Ok"),
        Promise.resolve("Cart: ok"),
        Promise.resolve("Payment: ok")
    ]);

    console.log(r1);
    console.log(r2);
    console.log(r3);    
}

runAll();   


async function checkEnv() {
     let results = await Promise.allSettled([
        Promise.resolve("Auth UP"),
        Promise.reject("DB down"),
        Promise.resolve("cache up")
     ]);
    results.forEach((r)=>{
        let status = r.status === "fulfilled" ? "✅" : "❌";
        let msg = r.value || r.reason;
        console.log(status + " " + msg); 
    });
}
checkEnv();

async function checkEndpoint(){

    let endpoints = ["/login", "/dashboard", "/reports"];

    for(let i =0;i<endpoints.length;i++){
        let result = await Promise.resolve(endpoints[i] + ":200 ok!");
        console.log(result);
    }
    console.log("All endpoints checked");
}
checkEndpoint();

// Async IIFE(Immediately Invoked)

(async function(){
    let msg = await Promise.resolve("Hello from IIFE");
    console.log(msg);
})();
console.log("outside IIFE");

async function add(a,b){
    return a + b;
}
async function main(){
    let sum = await add(10,20);
    console.log("Sum:", sum);

    let sum2 = await add(20,sum);
    console.log("Sum2: ", sum2);
}
main();


