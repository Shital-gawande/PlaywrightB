var var1 = 10;

if(true){
    console.log(var1);  // var is golbal scope and hoisted, so it is accessible here and will print 10
    var var1 = 20; 
    console.log(var1);
}