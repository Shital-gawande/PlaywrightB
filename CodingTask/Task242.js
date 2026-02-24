// check if a year is leap year

let year = 2022;

if(year%4 === 0 && year%100 !==0 || year%400 ===0){
    console.log(`Year is leap ${year}`);
}
else{
    console.log("Year is not leap year");
}