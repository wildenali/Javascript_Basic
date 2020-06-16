// Ambil Element
const cart_items = document.getElementById('cart');

// ES5
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 11", "Gadget");
// console.log(getProduct); // ini hasilnya object

// ES6
function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("iPhone 11", "Gadget");
console.log(getProduct); // ini hasilnya object
cart_items.innerHTML = `Product  ${getProduct.name} Category: ${getProduct.category}`;