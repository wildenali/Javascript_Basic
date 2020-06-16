// bentuk yg lebih komplek dari template literal

// Tagged Template
const nama = 'wilden ali';
const umur = 12;

function coba(string, ...values) {
    // return values;

    // // cara 1
    // let result = '';
    // string.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // });
    // return result;

    // cara 2, lebih ringkas
    return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}


const str = coba `Halo, saya ${nama}, berumur ${umur} tahun`;
console.log(str);




// Contoh misal mau ada HIGHLIGHT nya
const mobil = 'avanza';
const tahun = 2015;
const tempat = 'Karawang';

function cobaMobil(string, ...values) {
    return string.reduce((result, strMobil, i) => `${result}${strMobil}<span class="h1">${values[i] || ''}</span>`, '');
}


const strMobil = cobaMobil `Halo, saya ${mobil}, produksi pada tahun ${tahun} dan tempat produksinya di ${tempat}`;
console.log(strMobil);
document.body.innerHTML = strMobil;