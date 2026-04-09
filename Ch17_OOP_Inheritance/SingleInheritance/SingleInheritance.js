class BasePage{
    constructor(page){
        this.page = page;
    }
    open(){
        console.log("Opening the page");
    }
    close(){
        console.log("Closing the page")
    }
}

class LoginPage extends BasePage{
    constructor(){}

}

let login = new LoginPage();

login.open();
login.close();