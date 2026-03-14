//arrow function

const user = () => console.log("Welcome User");
user();

const user1 = nm => `Welcome ${nm}`;
let u = user1("Shital");
console.log(u);

const user2 = (a,b) => a * b;
console.log(user2(5,6));

const user3 = (age) =>{
if(age>=18){
    return 'eligibal for voting';
}
else
    return "not eligible";

}
let res = user3(89);
console.log(res);

