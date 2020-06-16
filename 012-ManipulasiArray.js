// Manipulasi Array

// 1. Menambahkan Array
var arr = ["1", 1, true]
console.log(arr)
console.log(arr[1])

var arr1 = [];
arr1[0] = "wilden";
arr1[1] = "ali";
arr1[2] = "hmm";
console.log(arr1);

// 2. Menghapus Array
var arr2 = ["wilden", "ali", "mm"];
arr2[1] = undefined;
console.log(arr2);

// ARRAY METHOD
/*
lenght
joint
push, pop, shift, unshift
slice, splice
foreach, map
sort
filter
find
*/


var arr3 = ['wilden', 'ali', 'mm']

// length
console.log(arr3.length)

// joint
console.log(arr3.join())
console.log(arr3.join(' '))
console.log(arr3.join('-'))

// push, mamsukan elemen baru di akhir
arr3.push('bambang')
console.log(arr3)

// pop, menghilangkan elemen baru di akhir
arr3.pop()
console.log(arr3)

// unshift, mamsukan elemen baru di awal
arr3.unshift('dody')
console.log(arr3)

// shift, menghilangkan elemen baru di awal
arr3.shift()
console.log(arr3)

// splice, menyambungkan
arr3.splice(2, 0, 'Siapa', 'wkwk')
console.log(arr3)

// slice, menghapus element pada posisi tertentu
var arr4 = arr3.splice(1,3);
console.log(arr4);

// foreach
var angka = [8,6,4,5,3,2,7,1];
angka.forEach(function(e) {
    console.log(e)
});

// map
angka.map(function(e) {
    console.log(e)
});

var angka2 = angka.map(function(e) {
    return e * 2;
});
console.log(angka2);

// sort
console.log(angka.sort());

// filter
var angka3 = [8,6,4,5,3,2,7,1];
var angka4 = angka3.filter(function(x){
    // return x == 5;
    // return x == 55;
    return x > 5;
});
console.log(angka4);

// find, hanya ambil satu aja, dia tidak menghasilkan arrau
var angka3 = [8,6,4,5,3,2,7,1];
var angka4 = angka3.find(function(x){
    return x == 5;
});
console.log(angka4);