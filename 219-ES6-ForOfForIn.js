// for..of
const mhs = ['wilden', 'ali', 'mur'];
for (const m of mhs) {
    console.log(m);
}

for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// String
const nama = 'wilden';
for (const n of nama) {
    console.log(n);
}


// NodeList
const liNama = document.querySelectorAll('.nama');
for (n of liNama) {
    console.log(n.innerHTML);
}


// Arguments
function jumlahkanAngka() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5));





// for..in
const student = {
    nama: 'WILden',
    umur: 14,
    email: 'WILden@simail.com'
}
for (m in student) {
    console.log(m);
}
for (m in student) {
    console.log(student[m]);
}