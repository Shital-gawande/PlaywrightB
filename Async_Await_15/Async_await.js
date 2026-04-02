getToken().then(function(token){
    return getUser(token);
}).then(function(user){
    console.log(user);
});

async function getUserData(){
    let token = await getToken();
    let user = await getUser(token);
    console.log(user);
};

getUserData();

