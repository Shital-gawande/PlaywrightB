//console.log('---------------------------------');
let n = 5;
for(let i=n;i>0;i--){
let line = " ";
for(let j = 0;j<=n-i;j++){
    line += " ";
}
for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
}
console.log(line);
}
console.log('---------------------------------');

let n1 =5;
for(let i=0;i<=n1;i++){
let line = " ";
for(let j = 0;j<=n1-i;j++){
    line += " ";
}
for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
}
console.log(line);
}

