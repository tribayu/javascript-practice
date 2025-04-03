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
