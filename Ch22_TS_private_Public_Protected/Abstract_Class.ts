abstract class BaseTest{
    protected testName: string;
    constructor(name: string){
        this.testName = name;
    }
    abstract setUp(): void;
    abstract execute(): void;
    abstract tearDown(): void;

}

class UITest extends BaseTest{

    setUp(): void {
        console.log("Setup: launch browser");
    }
    execute(): void {
        console.log("Executing the test cases");
    }
    tearDown(): void {
        console.log("TearDown close browser");
    }
}