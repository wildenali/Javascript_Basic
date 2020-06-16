function jumlahVolumDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;    

    return total;
}

console.log(jumlahVolumDuaKubus(2,3));
console.log(jumlahVolumDuaKubus(3,5));
console.log(jumlahVolumDuaKubus(30,533));