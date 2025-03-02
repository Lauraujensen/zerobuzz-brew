"use strict";
// Tilføjer et produkt til kurven
function addToCart(produkt) {
    let spladd = cart.find(bajer => bajer.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
}

// Fjerner et produkt fra kurven
function removeFromCart(produkt) {
    let spledact = cart.find(bajer => bajer.type === produkt);
    
    if (spledact && spledact.quantity > 0) {
        spledact.quantity--; // Rettelse: Brug objektet
        updateTotalPrice(spledact);
        saveCartToLocalStorage();
    }
}

// Nulstiller et enkelt produkt i kurven
function resetCart(produkt) {
    let splreset = cart.find(bajer => bajer.type === produkt);

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