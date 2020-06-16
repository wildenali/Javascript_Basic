// Callback

// // Synchronous Callback
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama: ');
//     callback(nama);
// }
// tampilkanPesan(nama => alert(`Halo, ${nama}`));

// Contoh Lain
const mhs = [{
        "nama": "Wilden Ali",
        "nim": "11710001",
        "email": "wildenali@mail.com",
        "jurusan": "Teknik Mencuci",
        "idDosenWali": 1
    },
    {
        "nama": "Dody Fer",
        "nim": "11710002",
        "email": "dody@mail.com",
        "jurusan": "Teknik Mencangkul",
        "idDosenWali": 2
    },
    {
        "nama": "Erik Dul",
        "nim": "11710003",
        "email": "rik@mail.com",
        "jurusan": "Teknik Menjilat",
        "idDosenWali": 2
    }
]
console.log('mulai');
// mhs.forEach(m => console.log(m.nama));
// seolah olah ambil datanya lama
mhs.forEach(m => {
    for (let i = 0; i < 1000000; i++) {
        let date = new Date();
    }
    console.log(m.nama)
});
console.log('selesai');


// Asynchronous Callback
// untuk nge handle yg lama, kaya seolah olah ambil datanya lama, kan prosesnya lama ya
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }
    xhr.open('get', url);
    xhr.send();
}
console.log('mulai');
getDataMahasiswa('222-ES6-Callbacks.json', results => {
    const mhs = JSON.parse(results);
    mhs.forEach(m => console.log(m.nama));
}, () => {});
console.log('selesai');