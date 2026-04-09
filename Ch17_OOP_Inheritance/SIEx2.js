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
class Dog{

    constructor(name,breed){
        super(name);
        this.breed= breed;
    }
    bark(){
        console.log(`${super.name} is barking`);
    }
}