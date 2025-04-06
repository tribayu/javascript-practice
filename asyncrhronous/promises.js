const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
});

fetchData.then((result) => console.log(result));




//////////////////


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

delay(1000).then(() => console.log("1 second later..."));
