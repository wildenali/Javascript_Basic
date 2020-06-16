// Arrow Function
// Bentuk lain lebih ringkas dari function expresion

let tampilPesan = (nama) => {
    // alert('halo ' + nama);
    return `Halo ${nama}`;
}
console.log(tampilPesan('Wilden'));

// yg satu argument di simple kan lagi juga bisa
let tampilNamaAja = nama => `Halo ${nama}`;
console.log(tampilPesan('Wilden'));


// Misal ada lebih dari satu argument
const tampilNamaUmur = (nama, umur) => {
    return `Halo ${nama}, berumu ${umur}`;
}
console.log(tampilNamaUmur('Wilden', 22));

// tanpa parameter
const tampilNama = () => 'hayyy';
console.log(tampilNama());


// coba pake function map
let mahasiswa = ['Wilden', 'Ali', 'Murtado'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

// dipetakaan sebagai objek
let jumlahHurup = mahasiswa.map(nama => ({ nama: nama, jmlhHurup: nama.length }));
console.log(jumlahHurup);
console.table(jumlahHurup);