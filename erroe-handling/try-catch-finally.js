try {
    let result = 10 / 0;
    console.log("Result:", result);
} catch (error) {
    console.error("Error:", error.message);
} finally {
    console.log("Execution completed.");
}
