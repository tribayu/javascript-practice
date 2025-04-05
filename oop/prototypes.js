function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
};

const john = new Person("John", 25);
john.greet();



/////////////////////


function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    console.log(`Hi, I'm ${this.name}`);
};

const bob = new Person("Bob");
bob.sayHi();
