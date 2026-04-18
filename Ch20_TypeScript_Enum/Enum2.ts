enum Severity{
    low,
    medium,
    high,
    critical,

}

console.log(Severity.high);

function needsImmediateAttention(severity: Severity): boolean{
    return severity >= Severity.high;
}

console.log("Require Attension:", needsImmediateAttention(Severity.medium));
console.log("Require Attension:", needsImmediateAttention(Severity.critical));
console.log("Severity Name:", Severity[2]);

enum Environment {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}

console.log(Environment.QA);