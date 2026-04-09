class Animal{

    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Dog extends Animal{

    constructor(name,breed){
        super(name);
        this.breed= breed;
    }
    bark(){
        console.log(this.name, 'is barking');
    }
}

let d1 = new Dog("Rocky","Labrador");
d1.eat();
d1.bark();
d1.sleep();
console.log(d1.breed);