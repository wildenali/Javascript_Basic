//  global scope / window scape

var a = 1;

function test() {
    var b = 2;
    console.log(2);
    console.log(a);
    console.log(window.a);
}

test();