class BaseTest{
    setUp(){
        console.log("Base: open browser");
    }
}
class APITest extends BaseTest{
    setUp(){
        console.log("APITest: open browser");
    }
}

let test = new APITest();
test.setUp(); // it will call child class 