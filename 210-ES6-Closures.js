/*
Closure adalah sebuah function ketika memiliki akses ke parent scope nya, medkipun parent scopenya sudah selesai eksekusi
*/

// Lexical Scope
function init() {
    return function(nama) {
        console.log(nama);
    }
}
let panggilNama = init();
panggilNama('wilden');
panggilNama('ali');

// kenapa menggunakaan Closuer
// 1. Untuk membuat Function Factories
// 2. untuk membuat Private Method


// 1. Untuk membuat Function Factories
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selama ${waktu}`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

selamatPagi('wilden');
selamatSiang('ali');

// 2. untuk membuat Private Method
let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100; // ini tidak akan mengganggu counter yg di dalam function

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());