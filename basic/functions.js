// functions.js


// Fungsi tanpa parameter
defaultFunction();
function defaultFunction() {
    console.log("Ini adalah fungsi tanpa parameter");
}

// Fungsi dengan parameter
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Bay"));

// Fungsi dengan nilai default parameter
function add(a = 2, b = 3) {
    return a + b;
}
console.log(add(), add(5, 7));
