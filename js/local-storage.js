"use strict"; 

// Opretter en indkøbskurv med et array bestående af objects
let cart = [
    { type: "classic", quantity: 0, price: 16, total: 0 },
    { type: "lakrids", quantity: 0, price: 12, total: 0 },
    { type: "ingefaer", quantity: 0, price: 16, total: 0 },
    { type: "citron", quantity: 0, price: 16, total: 0 },
    { type: "hyldeblomst", quantity: 0, price: 16, total: 0 }
];

// Gemmer kurvens indhold i localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('indkoebskurv', JSON.stringify(cart));
}

// Henter kurvens indhold fra localStorage ved sideindlæsning
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('indkoebskurv');
    if (storedCart) {
        cart = JSON.parse(storedCart); // Konverterer string til array
        updateUIFromCart(); // Opdaterer UI med hentede data
    }
}

// Opdaterer UI med kurvens data
//husk at bajer => er en forkortelse af function(bajer), det gør man typisk i f.eks. i en forEach 
function updateUIFromCart() {
    cart.forEach(bajer => {
        let antalIndi = document.getElementById(bajer.type);
        let prisIndi = document.getElementById(bajer.type + "-total");

        if (antalIndi && prisIndi) {
            antalIndi.value = bajer.quantity;
            prisIndi.value = bajer.total; // Rettelse: Bruger bajer.total
        }
    });
    totalPrice();
}



// Loader data fra localStorage ved opstart
window.onload = function () {
    loadCartFromLocalStorage();
};
