class HDFC{
    #balance;
    constructor(name,bal){
        this.name = name;
        this.#balance = bal;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance,cashier){
        if(cashier){
            this.#balance = balance;
        }
        else{
            console.log("Not allowed");
        }
    }
}

let shital = new HDFC("Shital",1000);
console.log(shital.getBalance());
shital.setBalance(25000,false);
console.log(shital.getBalance());

let saket = new HDFC("Saket",1000);
console.log(saket.getBalance());
saket.setBalance(25000,true);
console.log(saket.getBalance());