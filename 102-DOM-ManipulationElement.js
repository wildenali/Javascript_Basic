// DOM Manipulation Element
/*
1. element.innerHTML
2. element.style.<property>
3. element.setAttribute()
4. element.classList
5. .....
*/

// 1. element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = 'Wilden Aliii';  // <em>Nama nya</em> untuk miring

// bagian menghilangkan----------
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hilaaang';


// 2. element.style.<property>
const judull = document.querySelector('#judul');
judull.style.color = 'lightblue';
judull.style.backgroundColor = 'salmon';

// 3. element.setAttribute()
const judulll = document.getElementsByTagName('h1')[0];
judulll.setAttribute('name', 'wildennnn');
console.log(judulll);

    // kalau mau aktif kan ini, yg bagian menghilangkan---------- di nonaktifkan dulu
const a = document.querySelector('section#a a');
console.log(a.getAttribute('href'));

// 4. element.classList     , untuk mengelola class
const p2 = document.querySelector('.p2');
p2.classList.add('label');
console.log(p2);

p2.classList.remove('label');
console.log(p2);

p2.classList.toggle('label');   // kalau ga ada, di tambahin, kalau ada, di hilangkan
console.log(p2);

document.body.classList.toggle('merah-muda');

p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
const itemP = p2.classList.item(2);
console.log(itemP);

const containP2 = p2.classList.contains('tiga');
console.log(containP2);

p2.classList.replace('tiga', 'empat');
console.log(p2);