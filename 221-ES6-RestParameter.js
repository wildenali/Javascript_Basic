// Merepresentaikan argument pada function dengan jumlah yg tidak terbatas menjadi sebuah array

function myFunc() {
    return [...arguments];
}
console.log(myFunc(1, 2, 3, 4, 5));


// Contoh Penjumlahan
function jumlahkan(...angka) {
    // // cara 1
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total;

    // cara 2
    return angka.reduce((a, b) => a + b);
}
console.log(jumlahkan(1, 2, 3, 4, 5));


// Contoh pada Array Destructuring
const kelompok1 = ['wilden', 'ali', 'Dody', 'al', 'el'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota)

// Contoh pada Object Destructuring
const team = {
    pm: 'WILDEN',
    frontEnd1: 'ALI',
    frontEnd2: 'MUR',
    backEnd: 'AL',
    ux: 'EL',
    devOps: 'DOd',
}
const { pm, ...myTeam } = team;
console.log(myTeam);

// Contoh pada filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'wilden', false, 10, true, 'Dody'));
console.log(filterBy('string', 1, 2, 'wilden', false, 10, true, 'Dody'));