function debounce(func, delay) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    };
}

window.addEventListener("resize", debounce(() => {
    console.log("Resize event after 500ms");
}, 500));
