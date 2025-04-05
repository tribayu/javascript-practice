class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Buddy");
dog.speak();



//////////////////////////


class User {
    constructor(username) {
        this.username = username;
    }

    greet() {
        console.log(`Welcome, ${this.username}!`);
    }
}

const user1 = new User("neo123");
user1.greet();
