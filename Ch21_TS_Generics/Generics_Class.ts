class TestDataStorage<T>{
    private items: T[] = [];
    add(item: T): void{
        this.items.push(item);
    }
    getFirst(): T{
        return this.items[0]!;
    }
    getAll(): T[]{
        return this.items;
    }
    count(): number{
        return this.items.length;
    }
}

let codeStorage = new TestDataStorage<number>();
let testStorage = new TestDataStorage<string>();

codeStorage.add(200);
codeStorage.add(201);
codeStorage.add(400);
codeStorage.add(501);
codeStorage.add(500);

testStorage.add("Login Test");
testStorage.add("Dashboard Test");
testStorage.add("Logout Test");

console.log("First code:", codeStorage.getFirst());
console.log("All codes:", codeStorage.getAll());
console.log("Total codes:", codeStorage.count());   
console.log("First test:", testStorage.getFirst());
console.log("All tests:", testStorage.getAll());
console.log("Total tests:", testStorage.count());