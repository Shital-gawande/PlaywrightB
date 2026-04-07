const user = {
    name1:"Shital",
    age:20,
    email: "Shitalgawande@coforge.com"
};

const { name1 ,age } = user;
console.log(name1);
console.log(age);

//renaming prop
const {name1: userName , age: userAge} = user;
console.log(userName);
console.log(userAge); 

// Default values
const { country = "USA" } = user;
console.log(country);

//nested object
const data = { user: { name: "John", address: { city: "NYC" } } };
const { user: { address: { city } } } = data;