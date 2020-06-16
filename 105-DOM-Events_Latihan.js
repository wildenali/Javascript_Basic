const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue';   // cara 1
    // document.body.setAttribute('class', 'biru-muda');    // cara 2
    document.body.classList.toggle('biru-muda');            // cara 3
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function(){
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.ceil(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// ini bagian SLIDER
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// sMerah.addEventListener('change', function(){
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// sHijau.addEventListener('change', function(){
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('change', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});