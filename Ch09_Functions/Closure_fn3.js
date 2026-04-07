//closer function

function maxRetry(limit){
    let attempt =0;
    function tryagain(testname){
        attempt++;
        if(attempt>limit){
            return `maximum retry limit reached for ${testname}`;
        }
        return `retry possible ${attempt}/${limit} for ${testname}`;
    }
    return tryagain;
}

let retry = maxRetry(3);
retry("Login");
retry("Login");
console.log(retry("Login"));
console.log(retry("Login"));