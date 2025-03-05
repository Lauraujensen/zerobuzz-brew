"use strict";
function visClKnapper() {
    let tekstElement = document.getElementById("classic-knapper");
    let pilElement = document.getElementById("classic-pil");

    if (tekstElement.style.display === "none") {
        tekstElement.style.display = "flex"; // Gør teksten synlig
        pilElement.style.transform = "rotate(180deg)"; // Drejer pilen nedad
        }
    else {
        tekstElement.style.display = "none"; // Skjuler teksten igen
        pilElement.style.transform = "rotate(0deg)"; // Drejer pilen tilbage
        }
    }

    function visLaKnapper() {
        let tekstElement = document.getElementById("lakrids-knapper");
        let pilElement = document.getElementById("lakrids-pil");
    
        if (tekstElement.style.display === "none") {
            tekstElement.style.display = "flex"; // Gør teksten synlig
            pilElement.style.transform = "rotate(180deg)"; // Drejer pilen nedad
            }
        else {
            tekstElement.style.display = "none"; // Skjuler teksten igen
            pilElement.style.transform = "rotate(0deg)"; // Drejer pilen tilbage
            }
    }

    function visInKnapper() {
        let tekstElement = document.getElementById("ingefaer-knapper");
        let pilElement = document.getElementById("ingefaer-pil");
    
        if (tekstElement.style.display === "none") {
            tekstElement.style.display = "flex"; // Gør teksten synlig
            pilElement.style.transform = "rotate(180deg)"; // Drejer pilen nedad
            }
        else {
            tekstElement.style.display = "none"; // Skjuler teksten igen
            pilElement.style.transform = "rotate(0deg)"; // Drejer pilen tilbage
            }
    }

    function visCiKnapper() {
        let tekstElement = document.getElementById("citron-knapper");
        let pilElement = document.getElementById("citron-pil");
    
        if (tekstElement.style.display === "none") {
            tekstElement.style.display = "flex"; // Gør teksten synlig
            pilElement.style.transform = "rotate(180deg)"; // Drejer pilen nedad
            }
        else {
            tekstElement.style.display = "none"; // Skjuler teksten igen
            pilElement.style.transform = "rotate(0deg)"; // Drejer pilen tilbage
            }
    }

    function visHylKnapper() {
        let tekstElement = document.getElementById("hyldeblomst-knapper");
        let pilElement = document.getElementById("hyldeblomst-pil");
    
        if (tekstElement.style.display === "none") {
            tekstElement.style.display = "flex"; // Gør teksten synlig
            pilElement.style.transform = "rotate(180deg)"; // Drejer pilen nedad
            }
        else {
            tekstElement.style.display = "none"; // Skjuler teksten igen
            pilElement.style.transform = "rotate(0deg)"; // Drejer pilen tilbage
            }
    }

    window.shopAddOneToCart = function (produkt) {
        let shopadd = cart.find(bajer => bajer.type === produkt);
        
        if (shopadd) {
            shopadd.quantity++; // Rettelse: Brug objektet, ikke strengen
            shopUpdateTotalPrice(shopadd);
            saveCartToLocalStorage();
            
        }
        console.log("tilføjet 1");
        console.log(produkt);
        console.log(shopadd);
     };
     
     // Fjerner et produkt fra kurven
     window.shopRemoveOneFromCart = function (produkt) {
        let shopedact = cart.find(bajer => bajer.type === produkt);
        
        if (shopedact && shopedact.quantity > 0) {
            shopedact.quantity--; // Rettelse: Brug objektet
            shopUpdateTotalPrice(shopedact);
            saveCartToLocalStorage();        
        }
        console.log("fjernet 1");
     };

     window.shopAddSixToCart = function (produkt) {
        let shopadd = cart.find(bajer => bajer.type === produkt);
        
        if (shopadd) {
            shopadd.quantity++; // Rettelse: Brug objektet, ikke strengen
            shopUpdateTotalPrice(shopadd);
            saveCartToLocalStorage();
            
        }
        console.log("tilføjet 1 sixpack fra shoppen");
        console.log(produkt);
        console.log(shopadd);
     };
     
     // Fjerner et produkt fra kurven
     window.shopRemoveSixFromCart = function (produkt) {
        let shopedact = cart.find(bajer => bajer.type === produkt);
        
        if (shopedact && shopedact.quantity > 0) {
            shopedact.quantity--; // Rettelse: Brug objektet
            shopUpdateTotalPrice(shopedact);
            saveCartToLocalStorage();        
        }
        console.log("fjernet 1 sixpack fra shoppen");
     };

     window.shopAddTFToCart = function (produkt) {
        let shopadd = cart.find(bajer => bajer.type === produkt);
        
        if (shopadd) {
            shopadd.quantity++; // Rettelse: Brug objektet, ikke strengen
            shopUpdateTotalPrice(shopadd);
            saveCartToLocalStorage();
            
        }
        console.log("tilføjet 1 ramme fra shoppen");
        console.log(produkt);
        console.log(shopadd);
     };
     
     // Fjerner et produkt fra kurven
     window.shopRemoveTFFromCart = function (produkt) {
        let shopedact = cart.find(bajer => bajer.type === produkt);
        
        if (shopedact && shopedact.quantity > 0) {
            shopedact.quantity--; // Rettelse: Brug objektet
            shopUpdateTotalPrice(shopedact);
            saveCartToLocalStorage();        
        }
        console.log("fjernet 1 ramme fra shoppen");
     };

     function shopUpdateTotalPrice(produkt) {
        let splreset = cart.find(bajer => bajer.type === produkt);
    
        if(produkt){
            produkt.total = produkt.quantity * produkt.price;
            
            document.getElementById(produkt.type).value = produkt.quantity;
            document.getElementById(produkt.type + "-total").value = produkt.total;
    
    
            //slettet alle kaldte funktioner, da de ikke eksistere på katalog-html-siden
        
        console.log("update total price");
    }
        
    }





    // Hent dåse elementet og infographic containeren
const can = document.getElementById("can");
const info = document.getElementById("info");

// Når dåsen trykkes på, vis eller skjul infographic
can.addEventListener("click", () => {
    if (info.classList.contains("hidden")) {
        info.classList.remove("hidden");
    } else {
        info.classList.add("hidden");
    }
});
// Når infographic trykkes på, skjul den
info.addEventListener("click", () => {
    info.classList.add("hidden");
});


    