const CounterModule = (() => {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count,
    };
})();

CounterModule.increment();
CounterModule.increment();
console.log("Count:", CounterModule.getCount());


////////////////////

const Counter = (() => {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2
