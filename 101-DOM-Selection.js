// DOM Selection
/*
1. document.getElementById()                -> returnnya element      // javascript tlg dong cari in saya element berdasarkan Id yg ada di dalam dokumen
2. document.document.getElementsByTagName() -> returnnya HTMLCollections
3. document.getElementsByClassName()        -> returnnya HTMLCollections
4. document.querySelector()                 -> return nya element
5. document.querySelectorAll()              -> return nya nodelist
*/

// 1. document.getElementById   -> returnnya element
const judul = document.getElementById('judul')
console.log(judul);
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'Wilden Ubah';        // cara nge ubah judul pakai js


// 2. document.getElementsByTagName()   -> returnnya HTMLCollections
const p = document.getElementsByTagName('p');
console.log(p);
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0]
console.log(h1);
h1.style.fontSize = '100px';

// 3. document.getElementsByClassName() -> returnnya HTMLCollection
const p1 = document.getElementsByClassName('p1');
console.log(p1);
p1[0].innerHTML = 'Ini di ubah dari javascript'

// 4. document.querySelector()                 -> return nya element
const p4 = document.querySelector('#b p');
console.log(p4);
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange';

// const pp = document.querySelector('p');
// pp.innerHTML = 'INI DIUBAHlagi';


// 5. document.querySelectorAll()              -> return nya nodelist
const ppp = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++) {
    ppp[i].style.backgroundColor = 'yellow';
}