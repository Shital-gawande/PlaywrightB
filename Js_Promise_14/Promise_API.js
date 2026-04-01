let api = new Promise((resolve,reject)=>{
    resolve({status: 200, body: "User Data"});
});

api.then((response)=>{ // .then() runs ONLY when the promise resolves successfully.
    console.log(response);
    console.log(response.status);
    console.log(response.body); 
});