class Car{
    constructor(name){ // we don't need the declare the varialce first, we can direcly access , it will carete the variable
        this.name = name; 
    }
    drive(){ // don't need to specify the function keyword as its in class and its a method
        console.log(this.name, "is driving");
    }
    printCarDetails(){
        console.log("Car Name is : ", this.name);
    }

}

let hyundai = new Car("i10");
hyundai.drive();
hyundai.printCarDetails();

let kia = new Car("Seltos");
kia.drive();
kia.printCarDetails();  