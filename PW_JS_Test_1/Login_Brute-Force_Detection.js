
const userName = "shitalgawande@testingacademy.com";
const password = "Shital@123";
const login_Threshould = 3;

var striker = 0; 
var isLocked = false;

const loginAttempts = [{user:"Shital123",pass:"Shital12"},
{user:"Shital123@123",pass:"Shital15"}, 
{user:"Shital@123",pass:"Shitak2"},
{user:"shitalgawande@testingacademy.com", pass:"Shital@123"}
]
 let i = 0;

do{
   
    let currentAttempt = loginAttempts[i];
    let attemptNum = i+1;
    
    if(isLocked){
        console.log(`attemptNum ${attemptNum}.. Account is locked - Rejected`);
    }
    else if (currentAttempt.user === userName && currentAttempt.pass === password){
        console.log(`Login Successful on attempt ${attemptNum}`);
    }
    else{
        striker++;
        if(striker>=login_Threshould){
            isLocked = true;
            console.log(`🚨 ACCOUNT LOCKED`);
        }
    }
    i++;
}while(i<loginAttempts.length);


