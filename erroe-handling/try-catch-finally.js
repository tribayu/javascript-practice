try {
    let result = 10 / 0;
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Execution completed.");
}




/////////////////////



try {
    let data = JSON.parse('{"name":"John"}');
    console.log(data.name);
} catch (err) {
    console.error("Parsing error:", err.message);
} finally {
    console.log("Done parsing.");
}
