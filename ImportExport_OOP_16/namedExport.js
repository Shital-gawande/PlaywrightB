// we can add multiple exports in an file using named export

export const userName = "Shital Gawande";

export function getUserName(){
    console.log("UserName is :",userName);
    console.log("Age is : 28");
}

export function getUserCity(){
    console.log("City is : Pune");
    console.log("State is : Maharashtra");
}

let fname = "Pramod"; // This is not exported. That's why you cannot import it into other classes. 