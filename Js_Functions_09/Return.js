// return in function

function validateAge(age){
    if(age>=18) return "Eligibale for vote";
    else  return "not eligible for vote";
}

validateAge(30);

//return nothing 
function display(name1){
    console.log(`Name is ${name1}`);
}
display("Shital");

// function can return array or function or object

function numbers(num){
    return [1,2,3,4,5];
}
numbers  