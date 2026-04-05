class TestCase{

    constructor(name, status, priority){
        this.name = name;
        this.status = status;
        this.priority = priority;
    }
    display(){
        console.log(`Test Case is : ${this.name}, Status is : ${this.status}, 
            Proiority is : ${this.priority}`);    
    }
}

let tc1 = new TestCase("Login","Pending","High");
tc1.display();
let tc2 = new TestCase("Search","Pass","Medium");
tc2.display();  
