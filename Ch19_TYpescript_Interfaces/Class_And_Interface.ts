interface Executable {
    name: string;
    run(): void;
    getStatus(): string;
}

class TestCase implements Executable{
    name: string;
    constructor(name: string){
        this.name = name;
    }
    run(): void{
        console.log("[Run] "+ this.name);
    }
    getStatus(): string {
        return "Pass";
    }
}

let tc1 = new TestCase("Login Test");
tc1.run();
console.log("Status:", tc1.getStatus());