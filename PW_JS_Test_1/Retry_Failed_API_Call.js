//In automation testing, API calls sometimes fail due to network issues. Write a JavaScript program that simulates retrying a failed API call using a do...while loop. The program should retry a maximum of 5 times. Simulate random success/failure using Math.random() (40% chance of success: randomValue > 0.6). 
//Log each attempt and print the final result.

let attempt = 1;
do{

    let randomVal = Math.random;
    if(randomVal>0.6){
    
        console.log(`SUCCESS (Response 200 OK) API call PASSED after ${attempt} attempt(s).`);
    }
    else{
        console.log(`Failed..`);
    }
    attempt++;
}while(attempt<=5);