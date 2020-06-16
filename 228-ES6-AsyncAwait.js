const coba = new Promise(resolve => resolve('selesai'));
console.log(coba);

const coba1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('selesai');
    }, 2000);
});
// console.log(coba1);
coba1.then(() => console.log(coba1));


// Coba LAIN
function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai')
        }, 2000);
    });
}
async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba);
}
cobaAsync();

// Coba resolve dan reject
function cobaPromise_1(params) {
    return new Promise((resolve, reject) => {
        const waktu = 3000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesai');
            }, waktu);
        } else {
            reject('kelamaan');
        }
    });
}
const coba_1 = cobaPromise_1();
coba_1
    .then(() => console.log(coba_1))
    .catch(() => console.log(coba_1))


// Coba resolve dan reject PAKE async
async function cobaAsync_1(params) {
    try {
        const coba_2 = cobaPromise_2();
        console.log(coba_2);
    } catch (err) {
        console.error(err);
    }
}