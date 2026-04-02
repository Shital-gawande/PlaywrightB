
function openBrowser(){
    return new Promise(function(resolve,reject){
        resolve("Browser Opened");
    });
}

function goToLogin(){
    return new Promise(function(resolve,reject){
        resolve("Login page opened");
    });
}

function enterCredentials(){
    return new Promise(function(resolve, reject){
        resolve("Credentilas Entered");
    });
}

function ClickLogin(){
    return new Promise(function(resolve){
        resolve("Login clicked");
    });
}


async function executeLoginFlow(){
    let browser = await openBrowser();
    console.log("msg1: ", browser);

    let loginpage = await goToLogin();
    console.log("msg2:", loginpage);

    let credentialsEnter = await enterCredentials();
    console.log("msg3: ", credentialsEnter);

    let loginclicked = await ClickLogin();
    console.log("msg4:", loginclicked);
}

executeLoginFlow();