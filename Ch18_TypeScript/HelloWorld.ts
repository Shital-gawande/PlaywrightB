let testname: string = "Hello World from TypeScript!";
console.log(testname);

function greet(name: string): string{
    return `Hello, ${name}! Welcome to TypeScript.`;
}

console.log(greet("Alice"));