const readline = require('readline');

function hitungFaktorial() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Masukkan angka untuk menghitung faktorial: ", (input) => {
        let angka = Number(input);
        let faktorial = 1;

        if (isNaN(angka) || angka < 0) {
            console.log("Input tidak valid");
        } else {
            for (let i = 1; i <= angka; i++) {
                faktorial *= i;
            }
            console.log(`Faktorial dari ${angka} adalah ${faktorial}`);
        }

        rl.close();
    });
}

hitungFaktorial();