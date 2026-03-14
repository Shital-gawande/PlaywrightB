// immediatly invoked function expression doesn't need calling
(function() {
    console.log("Hello");
})();

(() => {
    console.log("greetings");
})();