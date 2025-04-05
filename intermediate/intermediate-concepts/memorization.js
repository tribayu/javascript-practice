function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("Fetching from cache:", key);
            return cache[key];
        }
        console.log("Calculating result...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const factorial = memoize(n => (n <= 1 ? 1 : n * factorial(n - 1)));
console.log(factorial(5));  // Output: 120




////////////////////////



function memoize(fn) {
    const cache = {};
    return function(n) {
        if (cache[n]) return cache[n];
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

const square = memoize(x => x * x);
console.log(square(4)); // 16
console.log(square(4)); // from cache: 16
