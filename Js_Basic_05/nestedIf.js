
let role = "admin";
let isLoggedIn = true;

if (isLoggedIn) {
  if (role === "admin") { 
    console.log("Welcome, Admin!");
  } else if (role === "user") {
    console.log("Welcome, User!");
  } else {
    console.log("Welcome, Guest!");
  }
} else {
  console.log("Please log in.");
}