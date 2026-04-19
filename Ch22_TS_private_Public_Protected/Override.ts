class BaseTest{
    setup():void{
        console.log("[BASE] open browser");
    }
    teardown(): void{
        console.log("[BASE] closing browser");
    }
}

class LoginTest extends BaseTest{
    override setup(): void {
        console.log("[Login] open browser");
    }
    override teardown(): void {
        console.log("[Login] close browser");
    }
}
class APITest extends BaseTest {

    override setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let login = new LoginTest();
let api = new APITest();
login.setup();
api.setup();