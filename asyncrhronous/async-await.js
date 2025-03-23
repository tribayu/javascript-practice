async function getData() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded!"), 1000);
    });

    const result = await promise;
    console.log(result);
}

getData();
