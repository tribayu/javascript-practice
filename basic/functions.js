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

console.log();

////hitunng diskon
function hitungdiskon(total){
    return total > 50000 ? total * 0.9 : total; 
}
console.log(hitungdiskon(60000));
console.log(hitungdiskon(40000));

console.log();

/////konversi suhu
function tofahenheit(celsius) {
    return (celsius * 9/5) + 32
}
console.log(tofahenheit(0));
console.log(tofahenheit(100));