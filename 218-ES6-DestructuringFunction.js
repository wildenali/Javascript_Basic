// Destructuring
function penjumlahanPerkalian(a, b) {
    return [a + b, a * b];
}

const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);


// pake Objek
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kalii: a * b,
        bagi: a / b,
    }
}

const { tambah, kalii, bagi, kurang } = kalkulasi(4, 5);
console.log(kurang);
console.log(tambah);
console.log(kalii);
console.log(bagi);


// Destructuring function arguments
const mhs1 = {
    nama: 'wildenwilden',
    umur: 12,
    mail: 'wildenwilden@mail.com',
    nilai: {
        tugas: 80,
        uts: 90,
        uas: 10
    }
}

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.
    dan nilai tugas saya ${uas}`;
}


console.log(cetakMhs(mhs1));