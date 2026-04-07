//// Private Fields (#) — Hidden Data
// PUBIC Fields 
class Credentials {
    #apiKey;
    user;
    constructor(user,key){
        this.user = user; // public
        this.#apiKey = key;
    }
    getAuthheader(){
        return this.#apiKey;
    }
}

let cred = new Credentials("Admin","Scerte123");
console.log(cred.user);
//console.log(cred.apiKey); undefined
//console.log(cred.#apiKey); // SyntaxError: Private field '#apiKey' must be declared in an enclosing class
// The ONLY way to access it is through the public method getAuthHeader()

console.log(cred.getAuthheader());
 
