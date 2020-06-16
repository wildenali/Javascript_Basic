// Promise
// Objec yg merepresentasikan keberhasilan/kegagalan sebuah event yg asynchronous di masa yg akan datang
// janji (terpenuhi/ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// Contoh 1
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditepati) {
        resolve('Janji telah ditepati!');
    } else {
        reject('Ingkar janji');
    }
});
console.log(janji1);
janji1.then(response => console.log('OK: ' + response)).catch(response => console.log('NOK OK : ' + response));
janji1
    .then(response => console.log('OK: ' + response))
    .catch(response => console.log('NOK OK : ' + response));

// Contoh 2
let ditepati2 = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati2) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa detik');
        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak ditepati setelah beberapa detik');
        }, 2000);
    }
});

console.log('mulai');
console.log(janji2.then(() => console.log(janji2))); // dilihatkan prosesnya ke console
janji2
    .finally(() => console.log('Selesai menunggu'))
    .then(response => console.log('OK: ' + response))
    .catch(response => console.log('NOK OK : ' + response));
console.log('selesai');


// Promise.all()
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Wilden',
            pemeran: 'Al, El, Dul'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }])
    }, 500);
});

film.then(response => console.log(response));
cuaca.then(response => console.log(response));

Promise.all([film, cuaca]).then(response => console.log(response));

Promise.all([film, cuaca])
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })