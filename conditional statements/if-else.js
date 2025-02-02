//DASAR

// soal 1 menentuka bilangan positif atau negarif

function soal1(angka){
    if(angka > 0){
        console.log("bilangan positif");
    } else if (angka < 0){
        console.log("bilangan negatif");
    }else {
        console.log("bilangan nol");
    }
}

soal1(9);
soal1(-12);
soal1(0);


console.log();


//SEDERHANA
// soal 2 apakah sebuah angka genap atau ganjil

function soal2(angka){
    if(angka % 2 === 0){
        console.log("bilangan genap");
   
    }else {
        console.log("bilangan ganjil");
    }
}

soal2(2);
soal2(9);
soal2(5);


console.log();


//MULTIPLE CONDITIONS

// 1.fungsi untuk mengkategorikan usia:
// - "Anak-anak" (0-12)
// - "Remaja" (13-19)
// - "Dewasa" (20+)

function kategoriusia(usia){
    if(usia <= 12) {
        return "anak-anak";
    } else if (usia >= 13 && usia <= 19) {
        return "remaja";
    } else {
        return "dewasa";
    }

}

console.log(kategoriusia(15));
console.log(kategoriusia(9));

console.log()

// 2.fungsi untuk mengkategorikan suhu
function kategorisuhu(suhu) {
    if (suhu <= 6 ) {
        return "sangat dingin";
    } else if (suhu > 10 && suhu <= 26) {
        return "sejuk";
    } else {
        return "panas";
    }
}

console.log(kategorisuhu(3));
console.log(kategorisuhu(18));
console.log(kategorisuhu(31));

console.log()

// 3.fungsi menghitung diskon
function hitungdiskon(totalbelaja){
    if(totalbelaja < 100000) {
        return "0% (tidak ada diskon)";
            return "5%";
        } else if (totalbelaja <1000000) {
            return "10%";
        } else {
            return "15%";
        }
 }

 console.log(hitungdiskon(90000));
 console.log(hitungdiskon(350000));
 console.log(hitungdiskon(900000));
 console.log(hitungdiskon(1200000));

 console.log()


 // 4. fungsi kategori waktu
 function zonawaktu(jam) {
    if (jam >= 4 && jam < 6) {
        return "subuh";
    } else if (jam >= 6 && jam < 12) {
        return "pagi";
    }else if (jam >= 12 && jam < 16) {
        return "siang";
    } else if (jam >= 16 && jam < 19) {
        return "sore";
    } else {
        return "malam";
    }
        
 }
 

 console.log(zonawaktu(4));
 console.log(zonawaktu(8));
 console.log(zonawaktu(13));
 console.log(zonawaktu(18));
 console.log(zonawaktu(23));



 console.log()


 // 5. kasifikasi nilai ujian
const readline = require('readline');

function klasifikasinilaiujian() {
    const rl1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl1.question("masukan nilai ujian (0-100): ", (input) => {
        let nilaiujian = input;
    
        if (isNaN(nilaiujian) || nilaiujian < 0 || nilaiujian > 100) {
            console.log("input tidak valid");
        } else {
            nilaiujian = Number(nilaiujian);
            if (nilaiujian >= 90) {
                console.log("sangat baik");
            } else if (nilaiujian >= 80) {
                console.log("baik");
            } else if ( nilaiujian >= 70) {
                console.log("cukup");
            } else if (nilaiujian >= 60) {
                console.log("kurang");
            }else {
                console.log("gagal");
            }
        }
    
        rl1.close();
        hitungpajakpenghasilan();
    });
}




console.log()



// 6. hitung pajak penghasilan
function hitungpajakpenghasilan() {
    const rl2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl2.question("masukan penghasilan tahunan: ", (inputpenghasilan) => {
        let penghasilan = Number(inputpenghasilan);
        let pajak = 0;
    
        if (isNaN(penghasilan) || penghasilan < 0) {
            console.log("input tidak valid");
        } else {
            if (penghasilan < 50000000) {
                pajak = 0;
            } else if (penghasilan >= 50000000 && penghasilan < 250000000) {
               pajak = penghasilan * 0.05;
            } else if ( penghasilan >= 250000000 && penghasilan < 500000000) {
                pajak = penghasilan * 0.15;
            } else {
                pajak = penghasilan * 0.25;
            }
            console.log(`jumlah pajak yang harus dibayar: ${pajak}`);
        }
    
        rl2.close();
    });
}



console.log()


///////////

function klasifikasiUsia() {
    const rl3 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl3.question("Masukkan usia: ", (input) => {
        let usia = Number(input);

        if (isNaN(usia) || usia < 0) {
            console.log("Input tidak valid");
        } else {
            if (usia < 13) {
                console.log("Anak-anak");
            } else if (usia >= 13 && usia < 20) {
                console.log("Remaja");
            } else if (usia >= 20 && usia < 60) {
                console.log("Dewasa");
            } else {
                console.log("Lansia");
            }
        }

        rl3.close();
    });
}


console.log()

///////////////////                               

function hariDalamMinggu() {
    const rl4 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl4.question("Masukkan angka (1-7): ", (input) => {
        let hari = Number(input);

        if (isNaN(hari) || hari < 1 || hari > 7) {
            console.log("Input tidak valid");
        } else {
            switch (hari) {
                case 1:
                    console.log("Senin");
                    break;
                case 2:
                    console.log("Selasa");
                    break;
                case 3:
                    console.log("Rabu");
                    break;
                case 4:
                    console.log("Kamis");
                    break;
                case 5:
                    console.log("Jumat");
                    break;
                case 6:
                    console.log("Sabtu");
                    break;
                case 7:
                    console.log("Minggu");
                    break;
            }
        }

        rl4.close();
    });
}

klasifikasinilaiujian();
klasifikasiUsia();
hariDalamMinggu();
