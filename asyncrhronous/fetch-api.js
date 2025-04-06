async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchUsers();



////////////////////


async function getUser() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const user = await res.json();
        console.log(user);
    } catch (err) {
        console.error("Error:", err);
    }
}

getUser();

