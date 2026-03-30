//2D array

let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

//accessing elements - [row][col]
console.log(grid[0][0]);

//modification
grid[2][2] = 99;
console.log(grid);


//length 
console.log(grid.length); // no of rows
console.log(grid[0].length); // no of colomuns in row 0

let status1 = [["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]];


//normal for loop
for(let i=0;i<status1.length;i++){
    for(let j=0;j<status1[i].length;j++){
        console.log(status1[i][j] + " ");
    }
    console.log();
}

//for-of loop
for(let i of status1){
    for(let j of i){
         process.stdout.write(j + " ");
    }
    console.log();
}

console.log('----------------------------');

//for-each loop
status1.forEach(row =>{
    row.forEach(cell=> process.stdout.write(cell + " "));
    console.log();
});