// race , which executes fastest promise and returns its result

let fastest = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Fast 100ms");
    },1000);
});

let slowest = new Promise( function(resolve){
    setTimeout(function(){
        resolve("slow 500ms");
    },5000);
});

Promise.race([fastest,slowest]).then(function(winner){
    console.log("Winner is: ", winner);
});