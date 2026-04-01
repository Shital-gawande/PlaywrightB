let apiCall = new Promise((resolve,reject)=>{
    reject("500 Internal Server Error");    
});

apiCall.catch((response)=>{
    console.log(response);  
});