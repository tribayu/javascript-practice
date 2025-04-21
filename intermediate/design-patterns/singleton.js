const Singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "I am the only instance" };
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b); // true
