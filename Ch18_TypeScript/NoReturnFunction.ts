
function sayHello(name: string): void{
    console.log("Hello," + name);
}

// Function annotations
function greet(name: string): string {
    return `Hello, ${name}!`;
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) { }
}