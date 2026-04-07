// iterating the array in different ways
let const1 = ["shital","Ram","Kalyani","Raja","Saket"];

//way 1 - traditional for loop
for(let i =0;i<const1.length;i++){
    console.log(const1[i]);
}

// for each loop keys with indexes
const1.forEach((k,v)=>console.log(`Key ${k} value ${v}`));

// for of loop
console.log("for of....");
for(let name of const1){

    console.log(name);
}

// for in loop used for indexes
console.log("for in....");
for(let n in const1){
    console.log(n);
}

//print the values using for inn
for(let n1 in const1){
    console.log(n1+"=>"+const1[n1]);
}

// print the values and names 
console.log("printing with entries....");

for(let [i, const2] of const1.entries()){
    console.log(i, const2);
}
