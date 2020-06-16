// Membuat object

// Object Literal
var mhs1 = {
    nama : 'wilden',
    nim : 117100048,
    email : 'wildenwildenaliali@gmail.com',
    jurusan : 'teknik apa aja'
}

var mhs2 = {
    nama : 'ali',
    nim : 117100049,
    email : 'wildeeeeen@gmail.com',
    jurusan : 'teknik jitu'
}

// Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Wil', 11170001, 'wil@mail.com', 'teknik potong');
console.log(mhs3)

// Constructor
function Mahasiswa(nama, nim, email, jurusan){
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Eril', 11700009, 'Eril@mail.com', 'teknik pukulan');
console.log(mhs4);