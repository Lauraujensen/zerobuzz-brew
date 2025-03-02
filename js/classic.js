"use strict"

function adjustQuantity(element, change) {
     // Finder det nærmeste <span> element med klassen "quantity" i forhold til den knap, der blev trykket på
    let quantitySpan = element.parentElement.querySelector(".quantity");
        // Henter den nuværende mængde og konverterer den fra tekst til et tal
    let currentQuantity = parseInt(quantitySpan.textContent);
        // Beregner den nye mængde og sikrer, at den ikke går under 0
    let newQuantity = Math.max(0, currentQuantity + change);
        // Opdaterer HTML-indholdet med den nye mængde
    quantitySpan.textContent = newQuantity;
}