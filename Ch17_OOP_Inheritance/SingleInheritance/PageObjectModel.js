class BaseTest{
    verify(){
        console.log("verifying base page");
    }
}
class LoginPage extends BaseTest{
    verify(){
        console.log("Verify: username field exists");
        console.log("Verify: password field exists");
        console.log("Verify: login button is visible");
    }
}
class DashBoard extends BaseTest{
    verify(){
        console.log("Verify: welcome message shown");
        console.log("Verify: sidebar menu loaded");
    }
}
class CartPage extends BaseTest{
    verify(){
        console.log("Verify: cart items displayed");
        console.log("Verify: total price is correct");
    }
}

let tests = [new LoginPage(),new DashBoard(),new CartPage()];

tests.forEach(element => {
    element.verify();
});