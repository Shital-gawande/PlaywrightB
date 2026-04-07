/*
1 2 3 4 5 
1 2 3 4
1 2 3
1 2
1
*/
for(let i=5;i>0;i--){
    let count =1;
   // let line ='';
    for(let j=i;j>0;j--){
       process.stdout.write(count + " ");
       count++;
    }
    console.log();
}
//cleaner code
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row.trim());
}