function step1(callback){
    console.log("Open browser");
    callback();
}

function step2(callback){
    console.log("navigate to url");
    callback();
}
function step3(callback){
    console.log("click button");
    callback();
}
function step4(callback){
    console.log("Enter credentials");
    callback(); 
}
function step5(callback){
    console.log("click on login");
    callback(); 
}

step1(function(){
    step2(function(){
        step3(function(){
            step4(function(){
                step5(function(){
                    console.log("Login successful");
                })
            })
        })
    })
});