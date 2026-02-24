//program to classify the triangle

let side1 = 10, side2 = 12, side3 =13;

if(side1 === side2 && side1 === side3){

    console.log("equilateral Triangle");

}
else if(side1 !== side2 && side2 !== side3 && side3 !== side1){
    console.log("scalene Triagnle");
}
else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("isosceles triagnle");
}
else{

    console.log("Triangle type not found");
}