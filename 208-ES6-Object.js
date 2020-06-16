// Cara untuk membuat Object pada javascript

// 1. Object Literal
let mahasiswa1 = {
    nama: 'wilden',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hai ${this.nama}, Selamat makan mie sabanyak ${porsi} porsi`)
    }
};
console.log(mahasiswa1.makan(2));

let mahasiswa2 = {
    nama: 'ali',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hai ${this.nama}, Selamat makan mie sabanyak ${porsi} porsi`)
    }
};
console.log(mahasiswa2.makan(5));


// 2. Function Declaration, keuntungannya ga usah bikin banyak object
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Woi ${this.nama}, Selamat makan siomay`);
    }

    mahasiswa.main = function(jam) {
        this.energi -= jam;
        console.log(`Woi ${this.nama}, Selamat bermain`);
    }
    return mahasiswa;
}
let aliw = Mahasiswa('aliw', 10);
console.log(aliw);

let murt = Mahasiswa('murt', 12);
console.log(murt);

murt.main(3);
console.log(murt);


// 3. Constructor
function Siswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Woi ${this.nama}, Selamat makan siomay`);
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Woi ${this.nama}, Selamat bermain`);
    }
}
let aliwSiswa = new Siswa('aliwSiswa', 5);
console.log(aliwSiswa);

let murtSiswa = new Siswa('aliwSiswa', 6);
console.log(murtSiswa);

murtSiswa.main(3);
console.log(murtSiswa);


// 4. Object.create()
// Function Declaration CARA LAIN, membuat objek terpisah
const methodDosen = {
    makan: function(porsi) {
        this.energi += porsi;
        console.log(`Pak Dosen ${this.nama}, Selamat makan cilok`);
    },
    bermain: function(jam) {
        this.energi -= jam;
        console.log(`Pak Dosen ${this.nama}, Selamat main cilok`);
    },
    tidur: function(jam) {
        this.energi += jam;
        console.log(`Pak Dosen ${this.nama}, Selamat tidur`);
    }
};

function Dosen(nama, energi) {
    let dosen = Object.create(methodDosen);
    dosen.nama = nama;
    dosen.energi = energi;

    return dosen;
}
let suaeb = Dosen('Suaeb', 10)
console.log(suaeb);
suaeb.tidur(3);
console.log(suaeb);

let sukiti = Dosen('Sukiti', 5)
console.log(sukiti);
sukiti.bermain(4);
console.log(sukiti);


// 5. Prototype
function KoreanStudent(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}

// nah cara mengelola method nya pake prototype
KoreanStudent.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan`;
}
KoreanStudent.prototype.main = function(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat main`;
}
KoreanStudent.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur`;
}


let wildeen = new KoreanStudent('wildeen', 10);
console.log(wildeen);

wildeen.makan(3);
console.log(wildeen.energi);

wildeen.main(3);
console.log(wildeen.energi);

wildeen.tidur(6);
console.log(wildeen.energi);


// 6. Versi Class
class JapanStudent {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }
    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main`;
    }
    tidur(jam) {
        this.energi += jam * 2;
        return `Halo ${this.nama}, selamat tidur`;
    }
}

let alii = new JapanStudent('alii', 10);
let alim = new JapanStudent('alim', 10);
console.log(alii)
console.log(alim)

alii.makan(3);
console.log(alii.energi);

alii.main(3);
console.log(alii.energi);

alii.tidur(6);
console.log(alii.energi);