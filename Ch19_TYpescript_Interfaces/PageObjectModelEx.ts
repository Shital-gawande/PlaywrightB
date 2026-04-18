interface BasePage{
    url: string;
    title: string;
}

interface LoginPage extends BasePage{
    userNameSelector: string;
    passwordSelector: string;
    loginButtonSelector: string;
}
interface FreeTrialPage extends BasePage{
     userNameSelector: string;
    submitButtonSelector: string;
}

let loginPage: LoginPage = {
    url: '/login',
    title: 'Login page',
    userNameSelector: '#userName',
    passwordSelector: '#password',
    loginButtonSelector: '@LoginButton'
}

let freeTrialPage: FreeTrialPage = {
    url: '/free-trial',
    title: 'Free Trial page',
    userNameSelector: '#userName',
    submitButtonSelector: '@SubmitButton'
}
console.log("URL:", loginPage.url);
console.log("Title:", loginPage.title);
console.log("Username field:", loginPage.userNameSelector);
console.log("Password field:", loginPage.passwordSelector);
console.log("Login button:", loginPage.loginButtonSelector);

console.log(" ------- ");

console.log("URL:", freeTrialPage.url);
console.log("Title:", freeTrialPage.title);
console.log("Username field:", freeTrialPage.userNameSelector);
console.log("Submit button:", freeTrialPage.submitButtonSelector);