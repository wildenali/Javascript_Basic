// Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'wilden'];
const [salam, satu, , tiga] = perkenalan; // jadi misalnya yg ke tidak tidak masu dimasukan, caranya seperti itu
console.log(salam);
console.log(satu);
// console.log(dua);   // yg ini akan error, karena si dua tidak ada
console.log(tiga);


// Swap Items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);


// Return value pada function
function coba() {
    return [3, 4];
}
const [c, d] = coba();
console.log(c);
console.log(d);


// Rest parameter
const [e, ...values] = [5, 6, 7, 8, 9];
console.log(a);
console.log(values);



// Distracturing Object
const mhs = {
    nama: 'wilden ali',
    umur: 22
}
const { nama, umur } = mhs; // nama sama umur harus sama kaya object nya, tidak bisa bebeas
console.log(nama);
console.log(umur);


// Assignment tanpa deklarasi objek
({ siapa, tinggi } = { siapa: 'mali', tinggi: 165 });
console.log(siapa);
console.log(tinggi);


// Assign ke variabel baru
const siswa = {
    name: 'wilali',
    age: 21
}
const { name: nn, age: aa } = siswa;
console.log(nn);
console.log(aa);


// Memberikan Default value
const student = {
    saha: 'mwild',
    sabaraha: 22,
    meil: 'mwild@meil.com'
}
const { saha, sabaraha, meil } = student;
console.log(saha);
console.log(sabaraha);
console.log(meil);