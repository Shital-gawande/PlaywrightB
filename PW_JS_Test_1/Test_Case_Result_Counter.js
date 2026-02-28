const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

var passed=0;
var failed =0;
var skkiped = 0;
for(let i=0;i<testResults.length;i++){

    if(testResults[i]==="pass"){
        passed ++; 
    }
    else if(testResults[i]==="fail"){
        failed++;
    }
    else if(testResults[i]==="skip"){
        skkiped++;
    }
}
//rint a test report with total tests, counts, pass rate percentage, and
//  a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).
if(passed === testResults.length){
    console.log(`Total Test: ${testResults.length} passed: ${passed} pass percentage ${(passed/testResults.length)*100}`);
    console.log("all passed → ready for release");
    
}
else if (failed<=2){
    console.log(`Total Test: ${testResults.length} failed percentage ${(failed/testResults.length)*100}`);
    console.log("Review code");
}
else if (failed>=2){
    console.log(`Total Test: ${testResults.length} failed percentage ${(failed/testResults.length)*100}`);
    console.log("Blocked release");
}
