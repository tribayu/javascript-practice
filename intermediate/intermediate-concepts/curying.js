function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5));  // Output: 10



//////////////

function greet(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = greet("Hello");
console.log(sayHello("Alice")); // Hello, Alice!
