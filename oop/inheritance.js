class Vehicle {
    constructor(type) {
        this.type = type;
    }

    info() {
        console.log(`This is a ${this.type}.`);
    }
}

class Car extends Vehicle {
    constructor(brand) {
        super("Car");
        this.brand = brand;
    }

    info() {
        super.info();
        console.log(`Brand: ${this.brand}`);
    }
}

const myCar = new Car("Toyota");
myCar.info();

/////////////////////

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const kitty = new Cat("Whiskers");
kitty.speak();

