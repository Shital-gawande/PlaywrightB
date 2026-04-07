// searching and checking
let url = "https://google.com";
url.includes("google");
url.includes("route");

url.startsWith("https");
url.endsWith("com");

url.indexOf(t);

url.lastIndexOf(g);

url.indexOf("la"); // it will return -1 as its not their in string

url.search(/google/); // here we can give the regex - regular expression