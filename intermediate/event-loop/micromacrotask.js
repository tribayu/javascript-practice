console.log("Start");

setTimeout(() => {
    console.log("Macrotask: setTimeout");
}, 0);

queueMicrotask(() => {
    console.log("Microtask: queueMicrotask");
});

Promise.resolve().then(() => {
    console.log("Microtask: Promise");
});

console.log("End");
