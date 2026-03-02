// --- 1. Global Setup (var) ---
var totalTests = 0;
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// --- 2. Configuration & Data (const) ---
const TEST_SUITE_NAME = "Playwright Foundation Suite";
const PASS_THRESHOLD = 100.00; // Suite only passes if 100% pass

const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "API Response time", actual: 150, expected: 200, type: "lessThan" },
    { name: "User Role Check", actual: "admin", expected: "admin", type: "looseEqual" },
    { name: "Auth Token Presence", actual: "ey...", expected: null, type: "truthy" },
    { name: "Retry Count Type", actual: 3, expected: "number", type: "typeCheck" },
    { name: "Missing Data Test", actual: undefined, expected: "N/A", type: "strictEqual" }
];

console.log(`--- Starting Suite: ${TEST_SUITE_NAME} ---\n`);

// --- 3. Execution (for loop) ---
for (let i = 0; i < testCases.length; i++) {
    let tc = testCases[i];
    let isPass = false;
    let detail = "";
    
    // Increment total using addition assignment operator
    totalTests++;

    // --- 4. Validation Logic (switch & operators) ---
    switch (tc.type) {
        case "strictEqual":
            isPass = (tc.actual === tc.expected);
            detail = `${tc.actual} === ${tc.expected}`;
            break;
        case "looseEqual":
            isPass = (tc.actual == tc.expected);
            detail = `${tc.actual} == ${tc.expected}`;
            break;
        case "typeCheck":
            isPass = (typeof tc.actual === tc.expected);
            detail = `typeof ${tc.actual} is ${tc.expected}`;
            break;
        case "truthy":
            isPass = !!tc.actual; // Double bang operator for truthiness
            detail = `${tc.actual} is truthy`;
            break;
        case "lessThan":
            isPass = (tc.actual < tc.expected);
            detail = `${tc.actual} < ${tc.expected}`;
            break;
        default:
            errorCount++;
            console.log(`⚠️ TC-0${totalTests}: ${tc.name} → ERROR (Unknown Type)`);
            continue; 
    }

    // --- 5. Result Reporting (Ternary & Logical Operators) ---
    if (isPass) {
        passCount++;
        console.log(`✅ TC-0${totalTests}: ${tc.name} → PASS (${detail})`);
    } else {
        failCount++;
        console.log(`❌ TC-0${totalTests}: ${tc.name} → FAIL (${detail})`);
    }
}

// --- 6. Advanced Tracking (while & do-while) ---
console.log("\n--- Analysis ---");

// Find consecutive passes from start (while loop)
let j = 0;
let stabilityScore = 0;
while (j < testCases.length && (testCases[j].actual === testCases[j].expected)) {
    stabilityScore++;
    j++;
}
console.log(`Stability Score (Consecutive starts): ${stabilityScore}`);

// Find index of first failure (do-while)
let k = 0;
let firstFailIndex = -1;
do {
    // Using loose inequality and logical check
    if (testCases[k].actual !== testCases[k].expected && firstFailIndex === -1) {
        firstFailIndex = k + 1;
    }
    k++;
} while (k < testCases.length);

console.log(`First failure detected at: ${firstFailIndex ?? "No failures"}`);

// --- 7. Summary Report ---
const passRate = (passCount / totalTests) * 100;
const suiteStatus = (passRate === PASS_THRESHOLD) ? "✅ PASSED" : "❌ FAILED";

console.log("\n" + "=".repeat(30));
console.log(`FINAL REPORT: ${suiteStatus}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Stats: ${passCount} Pass, ${failCount} Fail, ${errorCount} Error`);
console.log("=".repeat(30));