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