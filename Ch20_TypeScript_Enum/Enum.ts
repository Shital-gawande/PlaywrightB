enum TestStatus  {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Blocked = "BLOCKED",
    Pending = "Pending"
};

console.log(TestStatus.Pass);

// this was giving syntax error so run command npm install --save-dev tsx and then use 
// npx tsx Enum.ts to run the file
