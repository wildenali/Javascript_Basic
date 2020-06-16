let jsLanjut = Array.from(document.querySelectorAll('[data-duration]'))

.filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN'))

.map(durasi => durasi.dataset.duration)

.map(parts => {
    const part = parts.split(':');
    return parseFloat(part[0]) * 60 + parseFloat(part[1]);
})

.reduce((total, part) => total + part);

const jam = Math.floor(jsLanjut / 3600);

jsLanjut = jsLanjut - (jam * 3600);

const menit = Math.floor(jsLanjut / 60);

const detik = jsLanjut - menit * 60;

// innethtml
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const pJmlhVideo = document.querySelector('.jumlah-video');
const jmlhVideo = Array.from(document.querySelectorAll('[data-duration]')).filter(videos => videos.textContent.includes('JAVASCRIPT LANJUTAN')).length;
pJmlhVideo.textContent = jmlhVideo;