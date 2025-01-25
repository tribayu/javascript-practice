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