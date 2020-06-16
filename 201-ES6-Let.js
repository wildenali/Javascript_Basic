// ES5
var myCar = ['BMW', 'Mazda', 'Toyota'];
for (var i = 0; i < myCar.length; i++) {
    console.log(myCar[i]);
}
console.log(i); // ini tetep keluar nilainya


// ES6
const myMotor = ['Supra', 'RxKing', 'Bekju']; // bisa pakai let myMotor
for (let x = 0; x < myMotor.length; x++) {
    console.log(myMotor[x]);
}
console.log(x); // ini harusnya error