let statusCode: number[] = [200,201,400,500,403,203];
let names: string[] = ["Shital", "John", "Alice"];

console.log("Status Codes:", statusCode);
console.log("Names:", names);   


let testResult: { name: string; status: string; duration: number } = {
    name: "Login Test",
    status: "PASS",
    duration: 1200
};

console.log(testResult.name + " → " + testResult.status + " (" + testResult.duration + "ms)");