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

//////////////

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

    rl.close();
   });
});
