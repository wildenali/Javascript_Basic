// // 1. Multiline String
// console.log(`String 1
// String 2`);

// // 2. HTML Fragments
// const mhs1 = {
//     nama: 'Wilden',
//     email: 'wilden@email.com'
// }
// const mhs2 = [{
//         nama: 'Wilden',
//         email: 'wilden@email.com'
//     },
//     {
//         nama: 'Ali',
//         email: 'ali@email.com'
//     },
//     {
//         nama: 'Murtado',
//         email: 'murtado@email.com'
//     },
// ];

// let el = `<div class = "mhs1">
//     <h2>${mhs1.nama}</h2>
//     <span class="email">${mhs1.email}</span>
//     </div>`;
// console.log(el);
// document.body.innerHTML = el;

// const al = `<div class = "mhs2">
//     ${mhs2.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
//     </div>`;
// console.log(al);
// document.body.innerHTML = al;

// // 3. Conditionals
// // ternary
// const lagu = {
//     judul: "Kau Adalah",
//     penyanyi: 'Isyana',
//     feat: 'Rayi'
// }

// const dul = `<div class = "lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
//     </div>`;
// console.log(dul);
// document.body.innerHTML = dul;

// 4. Nested
// HTML Fragments bersarang
const mhs = {
    nama: 'Wilden',
    semester: 3,
    mataKuliah: [
        'Kuliah 1',
        'Kuliah 2',
        'Kuliah 3',
        'Kuliah 4',
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
        ${mataKuliah.map(mk => `<li> ${mk} </li>`).join('')} 
        </ol>
        `;
}

const el = `
    <div class = "mhs">
        <h2> ${mhs.nama} </h2>
        <span class = "semester">Semester: ${mhs.semester}</span>
        <h4> Mata Kuliah: </h4>
        ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`;
console.log(el);
document.body.innerHTML = el;