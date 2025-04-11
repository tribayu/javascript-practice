const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log("Squared:", squared);  // Output: [1, 4, 9, 16, 25]

///////////////////////


const nums = [1, 2, 3, 4, 5];

const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

const allPositive = nums.every(num => num > 0);
console.log("All Positive:", allPositive);
