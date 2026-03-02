// test data generator

const roles = ["admin","editor","viewer","tester","manager"];

var userCount =0;

let inActive_Ts = 3;

function getData(number){

    for(let i=1;i<=number;i++){
        userCount++;

        let name = `TestUser_${userCount}`;
        let email = `testuser${userCount}@testingacademy.com`;
        let status = i % inActive_Ts === 0 ? "Inactive" : "Active";
        let Id = `USR-000${userCount}`;
        let role = roles[(userCount-1)%roles.length];

        console.log("UserID | username | email | role | status");
        console.log(`${Id} | ${name} | ${email} | ${role} | ${status}`);
    }
}
getData(6);
