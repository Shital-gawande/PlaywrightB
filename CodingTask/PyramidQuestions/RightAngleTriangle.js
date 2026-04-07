/*
*
* *
* * *
* * * *
* * * * *
*/

for(let i=0;i<5;i++){
    let line ='';
    for(let j=0;j<=i;j++){
        line += '* ';
    }
    console.log(line.trim());
}

console.log("---------------------------------");

for(let i=5;i>0;i--){
    let row='';
    for(let j=0;j<i;j++){
        row +='* '
    }
    console.log(row.trim());
}