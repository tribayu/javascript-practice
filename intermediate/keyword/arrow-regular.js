const tester = {
    name: "Tester",
    regular: function() {
        console.log("Regular:", this.name);
    },
    arrow: () => {
        console.log("Arrow:", this.name);
    }
};

tester.regular(); // 'Tester'
tester.arrow();   // undefined atau window.name
