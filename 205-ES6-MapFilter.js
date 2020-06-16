// Ambil Element
const skills_holder = document.getElementById('skills');

// ES5


// ES6
const yourSkills = ['Makan', 'Minum', 'Tidur', 'Rebahan'];

// pakai forEach
// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });
// skills_holder.innerHTML = yourSkills;

// pakai MAP selain forEach
// const printSkills = yourSkills.map(skill => {
//     return skill;
// });
// skills_holder.innerHTML = yourSkills;

// Filter Data
const myPrimarySkill = yourSkills.filter(skill => {
    return skill === "Rebahan";
});
console.log(myPrimarySkill);
skills_holder.innerHTML = myPrimarySkill;