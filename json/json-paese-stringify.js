const user = {
    id: 1,
    username: "coder123",
    isAdmin: false
};

const json = JSON.stringify(user);
console.log("JSON String:", json);

const parsed = JSON.parse(json);
console.log("Parsed Object:", parsed.username);
