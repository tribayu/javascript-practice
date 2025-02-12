const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. Menentukan hari kerja atau akhir pekan
rl.question("Masukkan nama hari: ", (inputHari) => {
    let hari = inputHari.toLowerCase();
    if (hari === "sabtu" || hari === "minggu") {
        console.log("Ini akhir pekan");
    } else if (["senin", "selasa", "rabu", "kamis", "jumat"].includes(hari)) {
        console.log("Ini hari kerja");
    } else {
        console.log("Hari tidak dikenal");
    }

    // 2. Menentukan nama bulan
    rl.question("Masukkan angka (1-12) untuk bulan: ", (input) => {
        let bulan = parseInt(input);
        const namaBulan = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        console.log(bulan >= 1 && bulan <= 12 ? namaBulan[bulan - 1] : "Bulan tidak valid");

        // 3. Kalkulator sederhana
        rl.question("Masukkan angka pertama: ", (angka1) => {
            rl.question("Masukkan operator (+, -, *, /): ", (operator) => {
                rl.question("Masukkan angka kedua: ", (angka2) => {
                    let num1 = parseFloat(angka1);
                    let num2 = parseFloat(angka2);
                    let hasil;

                    switch (operator) {
                        case "+": hasil = num1 + num2; break;
                        case "-": hasil = num1 - num2; break;
                        case "*": hasil = num1 * num2; break;
                        case "/": hasil = num2 !== 0 ? num1 / num2 : "Tidak bisa dibagi dengan nol!"; break;
                        default: hasil = "Operator tidak valid";
                    }
                    console.log("Hasil:", hasil);

                    // 4. Kategori usia
                    rl.question("Masukkan usia Anda: ", (usia) => {
                        let umur = parseInt(usia);
                        let kategori =
                            umur >= 0 && umur <= 5 ? "Balita" :
                            umur >= 6 && umur <= 12 ? "Anak-anak" :
                            umur >= 13 && umur <= 17 ? "Remaja" :
                            umur >= 18 && umur <= 59 ? "Dewasa" :
                            umur >= 60 ? "Lansia" : "Usia tidak valid";
                        console.log("Kategori usia:", kategori);

                        // 5. Menentukan jenis segitiga
                        rl.question("Masukkan panjang sisi pertama: ", (sisi1) => {
                            rl.question("Masukkan panjang sisi kedua: ", (sisi2) => {
                                rl.question("Masukkan panjang sisi ketiga: ", (sisi3) => {
                                    let a = parseFloat(sisi1);
                                    let b = parseFloat(sisi2);
                                    let c = parseFloat(sisi3);
                                    let jenisSegitiga =
                                        a + b > c && a + c > b && b + c > a ?
                                            (a === b && b === c ? "Segitiga Sama Sisi" :
                                                (a === b || a === c || b === c ? "Segitiga Sama Kaki" : "Segitiga Sembarang")) :
                                            "Bukan segitiga (tidak memenuhi aturan segitiga)";
                                    console.log("Jenis segitiga:", jenisSegitiga);

                                    // 6. Menghitung luas bangun datar
                                    rl.question("Pilih bangun datar (persegi, persegi panjang, segitiga): ", (bangun) => {
                                        let bentuk = bangun.toLowerCase();

                                        switch (bentuk) {
                                            case "persegi":
                                                rl.question("Masukkan sisi: ", (sisi) => {
                                                    console.log("Luas persegi:", sisi * sisi);
                                                    rl.close();
                                                });
                                                break;
                                            case "persegi panjang":
                                                rl.question("Masukkan panjang: ", (panjang) => {
                                                    rl.question("Masukkan lebar: ", (lebar) => {
                                                        console.log("Luas persegi panjang:", panjang * lebar);
                                                        rl.close();
                                                    });
                                                });
                                                break;
                                            case "segitiga":
                                                rl.question("Masukkan alas: ", (alas) => {
                                                    rl.question("Masukkan tinggi: ", (tinggi) => {
                                                        console.log("Luas segitiga:", (alas * tinggi) / 2);
                                                        rl.close();
                                                    });
                                                });
                                                break;
                                            default:
                                                console.log("Bangun datar tidak dikenal");
                                                rl.close();
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
