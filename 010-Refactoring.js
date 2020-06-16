/* Why Refactoring
1. Readibility
2. DRY (Don't Repeat Yourself)
3. Testability
4. Performance
5. Maintainability 
*/

// refactoring sederhana, menyederhanakan sebuah program
function jumlahVolumDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

console.log(jumlahVolumDuaKubus(2,3));
console.log(jumlahVolumDuaKubus(3,5));
console.log(jumlahVolumDuaKubus(30,533));