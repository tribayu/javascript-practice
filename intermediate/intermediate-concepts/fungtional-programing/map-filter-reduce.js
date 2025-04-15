const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(n => n * n);
console.log("Squared:", squared);

const odd = numbers.filter(n => n % 2 !== 0);
console.log("Odd numbers:", odd);

const total = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", total);
