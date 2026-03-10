//Find the FIRST non-success code
let responses = [200, 201, 404, 500, 404, 200, 503];

let res = responses.find(s => s>=400);
console.log(res);

//Return all unique error codes

let setR = [...new Set(responses.filter(s => s>=400))];
console.log(setR);

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort();
console.log("Fastest:", sorted[0]);

//fix 

let srt = responseTimes.sort((a,b)=> a-b);
console.log(srt);
console.log("Fastest:", srt[0]);


//
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status);
