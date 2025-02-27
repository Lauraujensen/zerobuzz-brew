"use strict"; 

// Opretter en indkøbskurv med et array bestående af objects
let cart = [
    { type: "coffee", quantity: 0, price: 10, total: 0 },
    { type: "americano", quantity: 0, price: 18, total: 0 },
    { type: "espresso", quantity: 0, price: 22, total: 0 }
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
function updateUIFromCart() {
    cart.forEach(hvert => {
        let quantityField = document.getElementById(hvert.type);
        let totalField = document.getElementById(hvert.type + "-total");

        if (quantityField && totalField) {
            quantityField.value = hvert.quantity;
            totalField.value = hvert.total; // Rettelse: Bruger hvert.total
        }
    });
    totalPrice();
}

// Tilføjer et produkt til kurven
function addToCart(produkt) {
    let spladd = cart.find(hvert => hvert.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
}

// Fjerner et produkt fra kurven
function removeFromCart(produkt) {
    let spledact = cart.find(hvert => hvert.type === produkt);
    
    if (spledact && spledact.quantity > 0) {
        spledact.quantity--; // Rettelse: Brug objektet
        updateTotalPrice(spledact);
        saveCartToLocalStorage();
    }
}

// Nulstiller et enkelt produkt i kurven
function resetCart(produkt) {
    let splreset = cart.find(hvert => hvert.type === produkt);

    if (splreset) {
        splreset.quantity = 0;
        splreset.total = 0;
        updateTotalPrice(splreset);
        saveCartToLocalStorage();
    }
}

// Opdaterer totalprisen for et produkt
function updateTotalPrice(produkt) {
    produkt.total = produkt.quantity * produkt.price;

    document.getElementById(produkt.type).value = produkt.quantity;
    document.getElementById(produkt.type + "-total").value = produkt.total;

    totalPrice();
}

// Beregner den samlede pris for alle produkter i kurven
function totalPrice() {
    const totalSum = cart.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("totalSum").value = totalSum;
}

// Nulstiller hele kurven
function resetEntireCart() {
    cart.forEach(maybe => {
        maybe.quantity = 0;
        maybe.total = 0;
    });

    updateUIFromCart();
    saveCartToLocalStorage();
}

// Loader data fra localStorage ved opstart
window.onload = function () {
    loadCartFromLocalStorage();
};
