// functions.js


// Fungsi tanpa parameter
defaultFunction();
function defaultFunction (){
    console.log("ini adalah fungsi tanpa parameter")
}

console.log();

// Fungsi dengan parameter
function greet(name) {
    return `hello, ${name}!`;
}
console.log(greet("bay"));

console.log();

// Fungsi dengan nilai default parameter
function add(a = 2, b = 3) {
    return a + b;
}
console.log(add(), add(7, 9));

console.log();

//fungsi yang mengembalikan kuadrat dari sebuah angka.
function square(num) {
    return num * num;
}
console.log(square(15));

console.log();

//fungsi untuk memeriksa ganjil genap
function isEven(num) {
    return num % 2 === 0 ? "genap" : "ganjil";
}
console.log(isEven(15));
console.log(isEven(14));

console.log();

//////fungsi ngembalikan angka terbesar
function maxnumber (a, b) {
    return a > b ? a : b;
}
console.log(maxnumber(5, 19));


