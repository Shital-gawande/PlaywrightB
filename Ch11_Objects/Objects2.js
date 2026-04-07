
const user = {
    name1: "shital",
    age:30,
    email: "shitalgawande@coforge.com" 
};

console.log(user.name1);
console.log(user["age"]);

// Dynamic property access
let key = "name1";
console.log(user[key]);

//add/modify properties of user
user.city = "Solapur";
user.age =31;

console.log(user);
