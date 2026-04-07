function openBrowser(){
    return new Promise((resolve)=>{
        resolve("Browser Opened");
    });
}

function gotoLogin(){
    return new Promise((resolve)=>{
        resolve("Login Page Opened");
    }); 
}

function enterCredentials(){

    return new Promise((resolve)=>{
        resolve("Credentials Enteered");
    });
}

function clickLogin(){
    return new Promise((resolve)=>{
        resolve("Login Button Clicked");
    });
}

function verifyLogin(){
    return new Promise((resolve)=>{
        resolve("Login Successful");
    }); 
}

openBrowser().then((Response)=>{
    console.log(Response);
    return gotoLogin();
}).then((Response)=>{
    console.log(Response);
    return enterCredentials();
}).then((Response)=>{
    console.log(Response);
    return clickLogin();
}).then((Response)=>{
    console.log(Response);
    return verifyLogin();
}).then((Response)=>{
    console.log(Response);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Test Completed");
});