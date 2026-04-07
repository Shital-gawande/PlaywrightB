/*
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

*/ //Pascal's Triangle. This pattern is unique because 
// each number is the sum of the two numbers directly above it.


let n = 5;
for(let i=1;i<=n;i++){
    let line ="";
    for(let j =1;j<=n-i;j++){
        line += ' ';
    }
    let count = 1; 
    for (let k = 1; k <= i; k++) {
        line += count + " ";
        
        // This math calculates the next number in the Pascal row
        count = count * (i - k) / k;
    }
    
    console.log(line);
}