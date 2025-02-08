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
         rl.close();
    });
