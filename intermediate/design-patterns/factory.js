function Car(type) {
    if (type === "SUV") {
        return { brand: "Toyota", model: "Fortuner" };
    } else if (type === "Sedan") {
        return { brand: "Honda", model: "Civic" };
    } else {
        return { brand: "Generic", model: "Basic" };
    }
}

const myCar = Car("SUV");
console.log(myCar);
