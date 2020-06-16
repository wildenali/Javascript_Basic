// TELUSURI DOM

// Ketika x di pencet, maka card nya akan hilang
// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// });

// ------------ kalau mau semua nya bisa dihilangkan ------------
const close = document.querySelectorAll('.close');
console.log(close);
const card = document.querySelectorAll('.card');

// PAKE FOR
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e){     // e ini akan berisi event yg terjadi
//         // close[i].parentElement.style.display = 'none';       // cara 1
//         console.log(e);                                         // cara 2
//         console.log(e.target);                                  // cara 2
//         e.target.parentElement.style.display = 'none';          // cara 2
//     });
// }
// PAKE FOREACH
close.forEach(function(el){
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});







// -------- contoh cara DOM Traversal -------
const nama = document.querySelector('.nama');
// cara ambil parentelement
console.log(nama.parentElement);

// cara ambil container(kakek nya)
console.log(nama.parentElement.parentElement);

// cara ambil sibling
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);