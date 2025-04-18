function show() {
    console.log("Function this:", this);
}

const obj = {
    name: "Context Object",
    show: show
};

show();        // this = window or undefined
obj.show();    // this = obj
