interface BugReport {
    id: number,
    titile: string,
    severity: string,
    stepsToReproduce: string[]
}

function logBug(bug: BugReport){
    console.log("Bug Report->" +bug.id+"["+bug.severity+"]" + bug.titile);
    bug.stepsToReproduce.forEach(function(step: string,i: number){
        console.log(" "+(i+1) + ". " + step);
    })
}