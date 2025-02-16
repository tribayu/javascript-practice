

console.log(hoistedVar); // Undefined karena hoisting
var hoistedVar = "Saya di-hoist!";

// Function hoisting
greet();
function greet() {
    console.log("Hello, saya di-hoist!");
}

// let dan const tidak di-hoist seperti var
let notHoisted = "Saya tidak di-hoist!";
