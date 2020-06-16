// Ambil Element
const user1_place = document.getElementById('user1');
const user2_place = document.getElementById('user2');

// ES5
const user1_logged = "Tony";
user1_place.innerHTML = "Hi, " + user1_logged + " Apa Kabar?";

// ES6
const user2_logged = "Stark";
user2_place.innerHTML = `Hi, ${user2_logged}, Apa Kabar?`;