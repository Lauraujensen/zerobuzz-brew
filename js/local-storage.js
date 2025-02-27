"use strict";

//opretter en indkøbskurv med et array bestående af objects
// cart er global variabel som kan tilgås alle steder i koden
let cart = [
    {type: "coffee", quantity: 0, price: 10, total: 0},
    {type: "americano", quantity: 0, price: 12, total: 0},
    {type: "espresso", quantity: 0, price: 15, total: 0}
];

//gemmer kurvens indhold i browseren localStorage
function saveCartToLocalStorage(){
localStorage.setItem('indkoebskurv', JSON.stringify());
}

//Henter kurvens indhold fra localStorage ved sideindlæsning
function loadCartFromLocalStorage(){
const storedCart = localStorage.getItem('indkoebskurv');
if(storedCart) {
    cart =JSON.parse(storedCart); //konvertere strengen tilbage til et (object)array
    updateUIFromCart() //Opdatere UI med de hentede data
}
}

updateUIFromCart(){
    cart.forEach(hvert => {
        let quantityField = document.getElementById(hvert.type);
        let totalField = document.getElementById(hvert.type+"-total");

        if(quantityField && totalField) {
            quantityField.value =hvert.quantity;
            totalField.value = hvert.quantity;
        }
        
    }
    function updateUIFromCart() {

    })
}

function addToCart(product){
    let produkt = cart.find(hvert => hvert.type === produkt);
    

    if(produkt) {
        produkt.quantity++;
        updateTotalPrice(produkt);
        saveCartToLocalStorage();
    }

}

function removeFromCart(produkt){
    let produkt = cart.find(hvert => hvert.type === produkt);
    if(produkt && produkt.quantity > 0){
        produkt.quantity--;
        updateTotalPrice(produkt);
        saveCartToLocalStorage();
    }
}

function resetCart(product){
    let produkt = cart.find(hvert => hvert.type === produkt);

   
    if(produkt) {
        produkt.quantity =0;
        updateTotalPrice(produkt);
        saveCartToLocalStorage();
    }
}

function updateTotalPrice(produkt){
    let produkt = cart.find(hvert => hvert.type === produkt);

    if(produkt) {
        produkt.total =produkt.quantity*produkt.price;
        document.getElementById(produkt).value = produkt.quantity;
        document.getElementById(produkt + "-total").value = produkt.total;

        totalPrice();
    }
}

function totalPrice(){
    const totalSum = cart.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("totalSum").value = totalSum;
}

function restEntireCart(){
    cart.forEach (maybe => {
        maybe.quantity=0;
        maybe.total=0;
    });

    updateUIFromCart();
    saveCartToLocalStorage();
}

window.onload = function(){
    loadCartFromLocalStorage();
}