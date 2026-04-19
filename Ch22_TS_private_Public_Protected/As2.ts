let rawResponse: unknown ={
    status: 200,
    body: {
        user: "admin",
        role: "Tester"
    }
}

interface userResponse{
    status: number,
    body: {
        user: string,
        role: string
    }
}

let response = rawResponse as userResponse;

console.log(response.body);
console.log(response.status);