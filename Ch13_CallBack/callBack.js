//callback

function placeHolder(item,callback){

    console.log("order placed..."+item);
    callback();
}

//1st way
function fun(){
    console.log("item delivered..");
}
placeHolder("Lipstick",fun);

//2nd way - anonymous
placeHolder("Mascara", function() {
    console.log("Order dispatched");
})

//3rd way - arrow function
placeHolder("Kajal",()=>{
    console.log("order placed in arrow function");
});


//playwright ways to write the code
test('has title', async ({ page }) => {

});

function test(text, callback) {
    console.log("Hi, this is test");
    callback();
}

test("Verify that the login page is working", async (page) => {
    console.log("Running TC1")
});

test('has title', async ({ page }) => {

});

