// Event Handler
    // Inline HTML attribute
    // Element method
// addEventListener()

// 1. Event Handler
// jika paragraf 3 di klik, warna background nya berubah
const p3 = document.querySelector('.p3')

// ini cobain di paragraf 3
function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';   
}

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';   
}

// cobain di paragraf 2
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

// Reknomedasi pakai ini
// ketika paragraf 4 di klik, akan nambah list baru
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Bauu Lagi');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});


// REKOMENDASI pke 
// bikin 2 buah even addEvent,biar ga nimpa, jadi dua dua nya terkesekusi
const p1 = document.querySelector('.p1');
p1.addEventListener('click', function(){
    p1.style.backgroundColor = 'pink';
});

p1.addEventListener('click', function(){
    p1.style.color = 'yellow';
});