function wrapResponse<T>(statusCode: number, data: T): {statuscode: number, data: T}{
    return {statuscode: statusCode, data: data};
}

let userResponse = wrapResponse<string>(201, "Admin");
console.log("Stauts code:", userResponse.statuscode);
console.log("Data:", userResponse.data);

let productResponse = wrapResponse<{id: number, name: string}>(200, {id: 101, name: "Laptop"});
console.log("Status code:", productResponse.statuscode);
console.log("Data:", productResponse.data);

let flagResposne = wrapResponse<boolean>(400, false);

console.log("status code:", flagResposne.statuscode);
console.log("Data:", flagResposne.data);