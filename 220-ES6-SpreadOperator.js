// Memecah (expand / unpack) iterables menjadi single element

// Menggabungkan 2 Array
const mhs = ['wilden', 'ali', 'mur'];
const dosen = ['al', 'el', 'dul'];
const orang = [...mhs, 'aji', ...dosen];
console.log(...mhs);
console.log(...dosen);
console.log(...orang);


// Copy Array
const mhs1 = [...mhs];
mhs1[0] = 'fajar'
console.log(mhs);
console.log(mhs1);


// Ambil dari html
const liMhs = document.querySelectorAll('li');
const siswa = [...liMhs].map(m => m.textContent);
console.log(siswa);


// Memberikan animasi pada masing2 Huruf di Nama
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;