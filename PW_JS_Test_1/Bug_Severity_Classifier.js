

let frequency = "always";
let impact = "major";

if(frequency === "always" && impact === "blocker"){
    console.log(`Bug Title: Checkout page crashes on applying coupon Frequency: ${frequency} Impact: ${impact} Severity: P0 - Critical: Stop release immediately`);

}
else if(frequency === "always" && impact === "major"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P1`);
}
else if(frequency === "always" && impact === "minor"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P2`);
}
else if(frequency === "often" && impact === "blocker"){
    console.log(`Bug Title: total amount not displayed Frequency: ${frequency} Impact: ${impact} Severity: P1`);
}
else if(frequency === "often" && impact === "major"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P2`);
}
else if(frequency === "often" && impact === "minor"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P3`);
}
else if(frequency === "rarely" && impact === "blocker"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P2`);
}
else if(frequency === "rarely" && impact === "major"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P3`);
}
else if(frequency === "rarely" && impact === "minor"){
    console.log(`Bug Title: UPI option not working Frequency: ${frequency} Impact: ${impact} Severity: P4`);
}