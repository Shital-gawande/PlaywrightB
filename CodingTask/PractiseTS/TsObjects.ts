let customer :{name: string; age:number; empID: number,salary: number, dept: string} =
{
    name: "Shital",
    age: 30,
    empID: 1234,
    salary: 12000,
    dept: "IT"
}
console.log("Customer details:",customer);

console.log("=====================");

console.log(customer.name);
console.log(customer["age"]);