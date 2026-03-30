// 2d array common methods
let grid = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

let sumGrid = grid.map(row => row.reduce((a,b) => a+b,0));
console.log(sumGrid);

let suiteResult = [["login-pass", "register-pass", "logout-pass"], //auth service
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   // Payment suite
];

for(let i=0;i<suiteResult.length;i++){
    for(let j=0;j<suiteResult[i].length;j++){
        if(suiteResult[i][j].includes("fail")){
            console.log(suiteResult[i][j]);
        }
    }
}