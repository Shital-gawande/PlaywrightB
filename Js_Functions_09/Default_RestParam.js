// default parameters

function retry(testName, maxRetry =3, delay =1000){
    console.log(`${testName} ${maxRetry} ${delay}`);
}

retry("login");
retry("fpassword",4,2000);
retry("fuserid",2);

//rest parameters

function result(suite,...status){
    console.log(suite);
    console.log(status);
}

result("smoke","pass","fail","skipped");
