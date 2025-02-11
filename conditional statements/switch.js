//////1
const readline = require("readline")

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Masukkan nama hari: ", function (inputhari) {
        let hari = inputhari.toLowerCase();
        switch (hari) {
            case "sabtu":
            case "minggu":
                 console.log("ini akhir pekan");
                  break;
                 case "senin":
                 case "selasa":
                 case "rabu":
                 case "kamis":
                 case "jumat":
                    console.log("ini hari kerja");
                    break;
                    default:
                    console.log("hari tidak di kenal");
         }
         

    console.log()

//////////////2

rl.question("Masukkan angka (1-12) untuk bulan: ", function (input) {
    let bulan = parseInt(input);

    switch (bulan) {
        case 1: console.log("Januari"); break;
        case 2: console.log("Februari"); break;
        case 3: console.log("Maret"); break;
        case 4: console.log("April"); break;
        case 5: console.log("Mei"); break;
        case 6: console.log("Juni"); break;
        case 7: console.log("Juli"); break;
        case 8: console.log("Agustus"); break;
        case 9: console.log("September"); break;
        case 10: console.log("Oktober"); break;
        case 11: console.log("November"); break;
        case 12: console.log("Desember"); break;
        default: console.log("Bulan tidak valid");
    }

    /////3
    rl.question("Masukkan angka pertama: ", function (angka1) {
        rl.question("Masukkan operator (+, -, *, /): ", function (operator) {
            rl.question("Masukkan angka kedua: ", function (angka2) {
                let num1 = parseFloat(angka1);
                let num2 = parseFloat(angka2);
                let hasil;

                switch (operator) {
                    case "+": hasil = num1 + num2; break;
                    case "-": hasil = num1 - num2; break;
                    case "*": hasil = num1 * num2; break;
                    case "/": 
                        if (num2 !== 0) {
                            hasil = num1 / num2;
                        } else {
                            hasil = "Tidak bisa dibagi dengan nol!";
                        }
                        break;
                    default:
                        hasil = "Operator tidak valid";
                }

                console.log("Hasil:", hasil);

                console.log();

///4

rl.question("Masukkan usia Anda: ", function (usia) {
    let umur = parseInt(usia);
    let kategori;

    switch (true) {
        case (umur >= 0 && umur <= 5):
            kategori = "Balita";
            break;
        case (umur >= 6 && umur <= 12):
            kategori = "Anak-anak";
            break;
        case (umur >= 13 && umur <= 17):
            kategori = "Remaja";
            break;
        case (umur >= 18 && umur <= 59):
            kategori = "Dewasa";
            break;
        case (umur >= 60):
            kategori = "Lansia";
            break;
        default:
            kategori = "Usia tidak valid";
    }

    console.log("Kategori usia:", kategori);
                rl.close();
            });
        });
    });
   });
});
});


