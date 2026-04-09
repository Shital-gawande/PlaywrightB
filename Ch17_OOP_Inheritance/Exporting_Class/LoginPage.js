import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage{
    constructor(){
        super("Login page");
    }
    login(user){
        console.log(this.user +" logged in");
    }
}