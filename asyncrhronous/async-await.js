async function getData() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data loaded!"), 1000);
    });

    const result = await promise;
    console.log(result);
}

getData();



///////////////////

async function showMessage() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async/Await executed after 1 second");
}

showMessage();
