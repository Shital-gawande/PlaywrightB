//Check if ALL responses are successful (200–299)
let responses = [200, 201, 404, 500, 404, 200, 503];
let res1 = [200,201,203,205,206];

let statusR = responses.every(res=>res>=200 && res<299);
console.log(statusR);

let statusS = res1.every(res=>res>=200 && res<299);
console.log(statusS);