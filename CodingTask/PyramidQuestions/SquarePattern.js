let n =5;

for(let i=1;i<=5;i++){
    let row ="";
    for(let j=1;j<=n;j++){
        row+="* ";
    }
    console.log(row);
}

console.log("---------------------------------");

for(let i=1;i<=5;i++){
    let row ="";
    for(let j=1;j<=n;j++){
       if(j === 1 || j === n || i === 1 || i === n){
        row+="* ";}
        else {
            row += "  "; // Two spaces to match the "* " width
        }
    }
    console.log(row);
}