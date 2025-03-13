function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
    };
}

const closureExample = outerFunction("Hello");
closureExample("World");  // Output: Outer: Hello, Inner: World
