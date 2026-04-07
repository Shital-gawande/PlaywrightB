// static 
class TestRunner{
    static totalTest =0;
    static passCount = 0;
    constructor(name,passed){
        this.name = name;
        TestRunner.totalTest++;
        if(passed){
            TestRunner.passCount++;
        }
    }
    static summery(){
        return `Total Test ${TestRunner.totalTest} passed test ${TestRunner.passCount}`;
    }
    //class can contain static and non static methods/functions
}

new TestRunner("Login", true);
new TestRunner("SignUp", true);
new TestRunner("AddToCart", false);
new TestRunner("Payment", true);
new TestRunner("Order", true);

console.log(TestRunner.summery());
console.log(TestRunner.passCount);
console.log(TestRunner.totalTest);