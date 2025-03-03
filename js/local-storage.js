"use strict"; 

// Opretter en indkøbskurv med et array bestående af objects
let cart = [
    { type: "classic", quantity: 0, price: 16, total: 0 },
    { type: "lakrids", quantity: 0, price: 12, total: 0 },
    { type: "ingefaer", quantity: 0, price: 16, total: 0 },
    { type: "citron", quantity: 0, price: 16, total: 0 },
    { type: "hyldeblomst", quantity: 0, price: 16, total: 0 },
    { type: "classic-sixpack", quantity: 0, price: 60, total: 0 },
    { type: "lakrids-sixpack", quantity: 0, price: 49, total: 0 },
    { type: "ingefaer-sixpack", quantity: 0, price: 60, total: 0 },
    { type: "citron-sixpack", quantity: 0, price: 60, total: 0 },
    { type: "hyldeblomst-sixpack", quantity: 0, price: 60, total: 0 },
    { type: "classic-ramme", quantity: 0, price: 299, total: 0 },
    { type: "lakrids-ramme", quantity: 0, price: 249, total: 0 },
    { type: "ingefaer-ramme", quantity: 0, price: 299, total: 0 },
    { type: "citron-ramme", quantity: 0, price: 299, total: 0 },
    { type: "hyldeblomst-ramme", quantity: 0, price: 299, total: 0 }

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
    //Disse er til for at at "samlet/total...Price()" er opdateret når man går væk fra checkout siden og siden hen kommer tilbage igen
    samletHyldeblomstPrice();
    samletCitronPrice();
    samletIngefaerPrice();
    samletClassicPrice();
    samletLakridsPrice();
    
    totalPrice();
    console.log("updateUI");
}



// Loader data fra localStorage ved opstart
window.onload = function () {
    loadCartFromLocalStorage();
};
