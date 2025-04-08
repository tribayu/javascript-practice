class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Something went wrong!");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}



//////////////////


class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function checkAge(age) {
    if (age < 18) throw new ValidationError("Age must be at least 18");
    return true;
}

try {
    checkAge(15);
} catch (err) {
    console.error(`${err.name}: ${err.message}`);
}

