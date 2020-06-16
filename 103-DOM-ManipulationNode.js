// DOM Manipulation Node
/*
1. element.createElement()
2. element.createTextNode()
3. node.appendChild()
4. node.insertBefore()
5. parentNode.removeChild()
6. parentNode.replaceChild()
7. .....
*/

// ------------------ tambah paragraf baru ------------------
// 1. element.createElement()
const pBaru = document.createElement('p');

// 2. element.createTextNode()
const teksPBaru = document.createTextNode('Paragraf Baruu');

// 3. node.appendChild()
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
// ------------------ tambah paragraf baru ------------------



// ------------------ tambah li baru ------------------
// 1. element.createElement()
const liBaru = document.createElement('li');

// 2. element.createTextNode()
const teksLiBaru = document.createTextNode('ITeem Baruu');

// 3. node.appendChild()
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);
// ------------------ tambah li baru ------------------


// ------------------ remove paragraf ------------------
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('JUDUL Bau');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);
// ------------------ remove paragraf ------------------


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';