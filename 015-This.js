// Membuat object

// Cara 1 - function declaration
function halo(){
    console.log('halo');
}
halo();

// Cara 2 - Object Literal
var obj = {};
obj.halo1 = function(){
    console.log('halo1');
}
obj.halo1();

// Cara 3 - Constructor
function Halo2(){
    console.log('halo2');
}
new Halo2();
Helow = new Halo2();
console.log(Helow);







// -------------- THIS -----------------
console.log(this)   // window atau object global
console.log(window === this)

// Cara 1 - function declaration
function hay0(){
    console.log(this);
    console.log('hay0');
}
hay0();
this.hay0();    // this mengembalikan object global

// Cara 2 - Object Literal
var obj1 = {a : 10, nama : 'wilden'};
obj1.hay1 = function(){
    console.log(this)
    console.log('hay1');
}
obj1.hay1();

// Cara 3 - Constructor
function Hay2(){
    console.log('hay2');
}
new Hay2();
Hayy = new Hay2();
console.log(Hayy);


// ---------------------- LATIHAN --------------------
function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('angkot masih kosong');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }

}
 
var angkot1 = new Angkot('wilden', ['Cicaheum', 'cibiru'], [], 0)
var angkot2 = new Angkot('ali', ['ciroyom', 'antapani'], [], 0)
