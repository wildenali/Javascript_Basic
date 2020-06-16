// Asynchronous Callback with JQuery
console.log('mulai');
$.ajax({
    url: '223-ES6-CallbackswihJQuery.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    },
});
console.log('selesai');