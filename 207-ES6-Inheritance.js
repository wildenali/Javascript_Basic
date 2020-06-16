// Ambil Element
const skills_holder = document.getElementById('skills');

// ES5


// ES6
// modul untuk member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.nama_kelas);
    }

    hitungMember() {
        console.log('Tersedia 100 member');
    }
}

class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Hi ' + this.username + ' telah berlangganan paket ' + this.paket);
    }
}

let tambahLangganan = new Langganan('ali', 'Premium');
tambahLangganan.gabungPaket();
tambahLangganan.hitungMember();