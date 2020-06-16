// Ambil Element
const skills_holder = document.getElementById('skills');

// ES5


// ES6
const yourSkills = ['Makan', 'Minum', 'Tidur', 'Rebahan'];
skills_holder.innerHTML = yourSkills[1];


var parent = '<ul>'; // bisa pakai let juga
yourSkills.forEach((skill) => {
    console.log(`${skill}`);
    parent += '<li>' + skill + '</li>';
});
parent += '</ul>'
skills_holder.innerHTML = parent;