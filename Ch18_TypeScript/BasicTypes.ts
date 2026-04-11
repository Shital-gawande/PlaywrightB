//Premetives
let name: string = "Shital";
let age : number = 30;
let pi: number = 3.14;
let distance_to_moon: number = 300254777788789;
let isActive : boolean = true;
let nothing : null = null;
let notDefined : undefined = undefined;

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (number | string)[] = [1, "two", 3, "four"]; 
let names1: Array<string> = ["John", "Jane"];

// Any (avoid when possible)
let anything: any = "hello";

// Unknown (safer than any)
let unknown: unknown = "hello";