console.log("1. Sync");

setTimeout(() => {
    console.log("4. setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise");
});

console.log("2. Sync");
