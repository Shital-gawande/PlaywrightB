
let str = "Shital Gawande";
str.toLowerCase();
str.toUpperCase();

str.trim(); // removing trailing spaces

str.trimStart();
str.trimEnd();

let str2 = "Test test pass fail";
str2.replace("Name"); // replace first
str.replaceAll("name"); // replace all

str.replace(/Test/g, "pass"); // replace with regex /g for replacing all

//concatination

"hello" +" "+ "world";
"hello".concat(" ","world");
`${hello} ${world}`;


//spliting and joining

"hello wolrd".split(" "); // split by space
"hello".split(''); //split each char

let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);