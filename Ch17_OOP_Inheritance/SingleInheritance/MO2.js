class BaseTest{
    setUp(){
        console.log("Base: open browser");
    }
    tearDown(){
        console.log("Base: close browser");
    }
}
class UITest extends BaseTest{
    setUp(){
        super.setUp();
        console.log("UITest: maximized browser");
    }
    tearDown(){
        console.log("UITest: Taking screenshot");
        super.tearDown();
    }
}

let test = new UITest();
test.setUp();
console.log("---");
test.tearDown();