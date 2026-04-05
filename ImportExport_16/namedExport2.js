// we can add multiple exports in an file using named export

const userName = "Shital Takalikar";

function getUserName(){
    console.log("UserName is :",userName);
    console.log("Age is : 28");
}

function getUserCity(){
    console.log("City is : Pune");
    console.log("State is : Maharashtra");
}

//we can export all at once using export keyword
export { userName, getUserName, getUserCity };