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
afterHook("LogOff Test");