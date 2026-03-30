/*
*

**

***

****

*****
*/

for(let i =1;i<=5;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write('* ');
    }
    console.log();
}

console.log('---------------------------------');
let n = 3;
for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
        //row = row + "* ";
        row += "* ";
    }
    console.log(row.trim());
}

console.log('----------------------------------');

let n1 =5;
for(let i=n1;i>=1;i--){
let line = " ";
for(let j = 0;j<=n1-i;j++){
    line += " ";
}
for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
}
console.log(line);
}

console.log('----------------------------------');

for(let i =1;i<=n1;i++){
    let row =" ";
    for(let j = 0;j<=n1-i;j++){
    row += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
}
console.log(row);
}