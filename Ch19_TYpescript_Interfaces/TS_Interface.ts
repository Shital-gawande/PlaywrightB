interface TestCase {
    id: number;
    name: string;
    status: string;
    duration: number;
}

let TC1: TestCase = {

    id : 1,
    name: "Login Test",
    status: "Passed",
    duration: 120

}
console.log("TC-" + TC1.id + ": " + TC1.name + " → " + TC1.status);

let TC2