//functions in objects

const calculator = {
    value : 0,
    add(n){
        this.value += n;
        return this;
    },
    substract(n){ // we can have multiple functions also
        this.value -= n;
        return this;
    }
};

console.log(calculator.add(5).substract(2)); // o/p: { value: 3, add: [Function: add], substract: [Function: substract] }
// above chaining is possible as we are returning this , if this.value is returned then its not possible

const calc ={
    count : 1,
    add(n){
        this.count += n;
        return this.count;
    }
};
console.log(calc.add(6)); // directly print the count value

