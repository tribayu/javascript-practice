function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World");  // Output: Outer: Hello, Inner: World


/////////////

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
