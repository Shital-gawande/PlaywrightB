interface APIResponse {
    readonly statusCode: number,
    body: string,
    headers?: object,
    responseTime?: number
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"User":"Admin"}'
}
console.log(response.statusCode);
console.log(response.body);
console.log(response.headers);

console.log("-----------------------------");

interface point {
    readonly x: number,
    readonly y : number
}

const point1: point = {
    x :10,
    y :20
}
//point1.x = 30; // Error cannot assign to x as it's a readonly property

interface data {
    readonly items: readonly number[];
}
