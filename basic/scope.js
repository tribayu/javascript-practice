// scope.js
// Scope variabel di JavaScript

// Global scope
let globalVar = "Saya global!";

function testScope() {
    // Local scope
    let localVar = "Saya lokal!";
    console.log(globalVar); // Bisa diakses
    console.log(localVar); // Bisa diakses
}

testScope();

// console.log(localVar); // Error: localVar tidak terdefinisi di luar fungsi

// Block scope dengan let dan const
if (true) {
    let blockVar = "Saya dalam block!";
    console.log(blockVar);
}
// console.log(blockVar); // Error: blockVar tidak bisa diakses di luar blok

// Contoh tipe data dalam JavaScript
let stringType = "Hello, JavaScript!";
let numberType = 42;
let booleanType = true;
let arrayType = [1, 2, 3, 4, 5];
let objectType = { name: "Alice", age: 30 };

console.log(typeof stringType, typeof numberType, typeof booleanType, typeof objectType);
console.log(Array.isArray(arrayType)); // Mengecek apakah array



function functionScopeExample() {
    if (true) {
        var functionVar = "Saya dalam function!";
        let blockVar = "Saya dalam block!";
        const blockConst = "Saya juga dalam block!";
    }
    console.log(functionVar); // Bisa diakses
    // console.log(blockVar); // Error: blockVar tidak terdefinisi di luar blok
    // console.log(blockConst); // Error: blockConst tidak bisa diakses di luar blok
}

functionScopeExample();
