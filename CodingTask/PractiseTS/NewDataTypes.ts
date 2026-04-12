// any - we can assign any type of value to variable
let val: any = 10;
let val2: any = true;
let val3: any = "Shital";

// unknown - we can assign any type value to the variable but we should check the type before using it
let val4: unknown = "shital";
if(typeof val4 === "string"){
    console.log(val4.toUpperCase());
}
let val5: unknown = 10;
if(typeof val5 === "number"){
    console.log(val5.toFixed(3)); // this method will add floating point to number with specified zeros
}

// void - it is used for function which doesn't return any value
function displayName(name: string): void{
    console.log("name:",name);
}
displayName("Shital");

// never - it is used for function which never return any value and also doesn't complete its execution
function throwError(message: string): never{
    throw new Error(message);
}