// closure function 

function makeCounter(strart =0){
    let count = strart;

    return {
        increment(){ count++ },
        decrement(){ count-- },
        get(){ return count }
    }
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());