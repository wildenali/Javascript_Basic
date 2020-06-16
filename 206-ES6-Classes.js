// Ambil Element
const skills_holder = document.getElementById('skills');

// ES5


// ES6
// modul untuk member kelas
class Siswa {
    constructor(username, password, id_kelas) {
        this.username = username;
        this.password = password;
        this.id_kelas = id_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.id_kelas);
    }
}

let tambahSiswa = new Siswa('wildenalii', 'abc123', 101001);
tambahSiswa.gabung();