"use strict";
// Tilføjer et produkt til kurven
function addOneToCart(produkt) {
    let spladd = cart.find(bajer => bajer.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
    console.log("tilføjet 1");
    console.log(produkt);
    console.log(spladd);
}

// Fjerner et produkt fra kurven
function removeOneFromCart(produkt) {
    let spledact = cart.find(bajer => bajer.type === produkt);
    
    if (spledact && spledact.quantity > 0) {
        spledact.quantity--; // Rettelse: Brug objektet
        updateTotalPrice(spledact);
        saveCartToLocalStorage();        
    }
    console.log("fjernet 1");
}

// Tilføjer et produkt til kurven
function addSixToCart(produkt) {
    let spladd = cart.find(bajer => bajer.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
    console.log("tilføjet 1 sixpack");
    console.log(produkt);
    console.log(spladd);
}

// Fjerner et produkt fra kurven
function removeSixFromCart(produkt) {
    let spledact = cart.find(bajer => bajer.type === produkt);
    
    if (spledact && spledact.quantity > 0) {
        spledact.quantity--; // Rettelse: Brug objektet
        updateTotalPrice(spledact);
        saveCartToLocalStorage();        
    }
    console.log("fjernet 1 sixpack");
}

// Tilføjer et produkt til kurven
function addTFToCart(produkt) {
    let spladd = cart.find(bajer => bajer.type === produkt);
    
    if (spladd) {
        spladd.quantity++; // Rettelse: Brug objektet, ikke strengen
        updateTotalPrice(spladd);
        saveCartToLocalStorage();
    }
    console.log("tilføjet 1 ramme");
    console.log(produkt);
    console.log(spladd);
}

// Fjerner et produkt fra kurven
function removeTFFromCart(produkt) {
    let spledact = cart.find(bajer => bajer.type === produkt);
    
    if (spledact && spledact.quantity > 0) {
        spledact.quantity--; // Rettelse: Brug objektet
        updateTotalPrice(spledact);
        saveCartToLocalStorage();        
    }
    console.log("fjernet 1 ramme");
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
    let splreset = cart.find(bajer => bajer.type === produkt);

    if(produkt){
        produkt.total = produkt.quantity * produkt.price;
        
        document.getElementById(produkt.type).value = produkt.quantity;
        document.getElementById(produkt.type + "-total").value = produkt.total;


        //Disse er til for at inputfelterne viser de samlede priser
    totalPrice();
    samletClassicPrice();
    samletLakridsPrice();
    samletIngefaerPrice();
    samletHyldeblomstPrice();
    samletCitronPrice();
    console.log("update total price");
}
    
}


 function samletClassicPrice() {
     const classicProdukter = cart.filter(produkt =>produkt.type.includes("classic"));
     const classicSum = classicProdukter.reduce((sum, ele) => sum + ele.total, 0);
     document.getElementById("classicSum").value = classicSum;
}
//  const lakridsProdukter = cart.filter(produkt => produkt.type.includes("lakrids"));

//  function samletLakridsPrice() {
//      const lakridsSum = lakridsProdukter.reduce((sum, ele) => sum + ele.total, 0);
//      document.getElementById("lakridsSum").value = lakridsSum;
// }
function samletLakridsPrice() {
    const lakridsProdukter = cart.filter(produkt => produkt.type.includes("lakrids")); 
    const lakridsSum = lakridsProdukter.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("lakridsSum").value = lakridsSum;
}
function samletIngefaerPrice() {
    const ingefaerProdukter = cart.filter(produkt => produkt.type.includes("ingefaer")); 
    const ingefaerSum = ingefaerProdukter.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("ingefaerSum").value = ingefaerSum;
}
function samletCitronPrice() {
    const citronProdukter = cart.filter(produkt => produkt.type.includes("citron")); 
    const citronSum = citronProdukter.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("citronSum").value = citronSum;
}
function samletHyldeblomstPrice() {
    const hyldeblomstProdukter = cart.filter(produkt => produkt.type.includes("hyldeblomst")); 
    const hyldeblomstSum = hyldeblomstProdukter.reduce((sum, ele) => sum + ele.total, 0);
    document.getElementById("hyldeblomstSum").value = hyldeblomstSum;
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

function removeEntireClassic() {
    cart.forEach(bajer => {
        if (bajer.type.includes("classic")) {
            bajer.quantity = 0;
            bajer.total = 0;
        }
    });    
    document.getElementById("classicSum").value = 0;
    console.log("du trykkede på slet alt 'classic'-knappen");  
    updateUIFromCart();
    saveCartToLocalStorage();
    visFirst();
    skjulKlasseArtikler();
}



function removeEntireLakrids() {
    cart.forEach(bajer => {
        if (bajer.type.includes("lakrids")) {
            bajer.quantity = 0;
            bajer.total = 0;
        }
    });    
    document.getElementById("lakridsSum").value = 0;
    console.log("du trykkede på slet alt 'lakrids'-knappen");  
    updateUIFromCart();
    saveCartToLocalStorage();
}

function removeEntireIngefaer() {
    cart.forEach(bajer => {
        if (bajer.type.includes("ingefaer")) {
            bajer.quantity = 0;
            bajer.total = 0;
        }
    });    
    document.getElementById("ingefaerSum").value = 0;
    console.log("du trykkede på slet alt 'ingefær'-knappen");  
    updateUIFromCart();
    saveCartToLocalStorage();
}

function removeEntireCitron() {
    cart.forEach(bajer => {
        if (bajer.type.includes("citron")) {
            bajer.quantity = 0;
            bajer.total = 0;
        }
    });    
    document.getElementById("citronSum").value = 0;
    console.log("du trykkede på slet alt 'citron'-knappen");  
    updateUIFromCart();
    saveCartToLocalStorage();
}

function removeEntireHyldeblomst() {
    cart.forEach(bajer => {
        if (bajer.type.includes("hyldeblomst")) {
            bajer.quantity = 0;
            bajer.total = 0;
        }
    });    
    document.getElementById("hyldeblomstSum").value = 0;
    console.log("du trykkede på slet alt 'hyldeblomst'-knappen");  
    updateUIFromCart();
    saveCartToLocalStorage();
}

