// Menghitung Faktorial 
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


console.log()


//Menampilkan Tabel Perkalian
const readline = require('readline');

function tabelPerkalian() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Masukkan angka untuk tabel perkalian: ", (input) => {
        let angka = Number(input);

        if (isNaN(angka)) {
            console.log("Input tidak valid");
        } else {
            console.log(`Tabel perkalian untuk ${angka}:`);
            for (let i = 1; i <= 10; i++) {
                console.log(`${angka} x ${i} = ${angka * i}`);
            }
        }

        rl.close();
    });
}

tabelPerkalian();