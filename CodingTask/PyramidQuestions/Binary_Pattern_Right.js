/**
 0
1 0
0 1 0
1 0 1 0
0 1 0 1 0
 */

for(let i=1;i<=5;i++){
    let line ='';
    for(let j=1;j<=i;j++){
        if((i+j)%2==0){
            line += '0 '; 
        }
        else{
            line += '1 ';
        }
    }
    console.log(line.trim());
}
