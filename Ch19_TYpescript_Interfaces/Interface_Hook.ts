// Interface for test hook functions
interface TestHook {
    (testName: string): void;
}

let beforeHook: TestHook = function (testName: string){
    console.log("[Before] setting up:"+ testName);
}

let afterHook : TestHook = function (testName: string){
    console.log("[After] tear down:"+ testName);
}

beforeHook("Login Test");
interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let test1: TestCase = {
    id: 1,
    name: "Login with valid credentials",
    status: "PASS",
    duration: 1500
};

console.log("TC-" + test1.id + ": " + test1.name + " → " + test1.status);

afterHook("LogOff Test");