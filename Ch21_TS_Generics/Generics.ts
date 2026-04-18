function getFirstResult<T>(results: T[]): T{
    return results[0]!;
}

let firstCode = getFirstResult<number>([201,200,400,501]);
console.log("First code:", firstCode);

let firstTest = getFirstResult<string>(["Login","Dashboard","Logout"]);
console.log("First test:", firstTest);