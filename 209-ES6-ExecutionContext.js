// Execution Context

console.log(nama);
var nama = 'wilden';

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hoisting
// window sebegai global object
// this sebagai window

// execution phase
console.log(sayHello());

var nama = 'wilden';
var umur = 10;

function sayHello() {
    return `Halo, nama saya ${nama}, berumur ${umur} tahun`;
}

// bisa cek di pythontutor.com/javascript.html#mode=display, masuking program yg execution phase



var nama = 'wilden ali';
var username = 'wildenali';

function cetakURL(username) {
    var instagramURL = 'http://instagram.com/';
    return instagramURL + username;
}
console.log(cetakURL(username));