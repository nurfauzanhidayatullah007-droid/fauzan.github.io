const nama = "nurfauzan hidayatullah";
let usia = 15;

function generateBiodata() {
    if(usia > 10 && usia < 18) {
        //INI ADALAH KONDISI PERTAMA
        console.log('anda remaja');
    } else {
        //INI ADALAH JIKA KONDISI TIDAK TERPENUHI
        console.log('wah elu jenis orang yang mana ya gue bingung 😂');
    }
}

console.log(nama);
console.log(usia);

generateBiodata();