// FILTER, MAP, REDUCE
// map()
// filter()
// reduce()


// -------------------- filter()
const angka = [-1, 8, 9, 1, 4, -5 - 4, 3, 2, 9];

// mencari angka >= 3
const newAngka1 = angka.filter(function(a) {
    return a >= 3;
});
console.log(newAngka1);
// cara lain
const newAngka2 = angka.filter(a => a >= 3);
console.log(newAngka2);



// -------------------- map()
// contoh kalikan angka
const newAngka3 = angka.map(a => a * 2);
console.log(newAngka3);



// -------------------- reduce()
// jumlahkan seluruh pada element array
const newAngka4 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 adalah nilai awal, coba aja ubah-ubah
console.log(newAngka4);



// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8,9,9
    .map(a => a * 3) // 24,27,27
    .map(a => a / 2) // 78
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);